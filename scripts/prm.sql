-- =========================================================
-- EXTENSIONS
-- =========================================================
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "btree_gist";

-- =========================================================
-- ENUM TYPES
-- =========================================================
CREATE TYPE manager_application_status AS ENUM
('pending','approved','rejected','cancelled');

CREATE TYPE pricing_unit AS ENUM
('month','night','day','event');

CREATE TYPE property_availability_status AS ENUM
('available','occupied','maintenance');

CREATE TYPE booking_status AS ENUM
('pending','approved','rejected','cancelled','expired');

CREATE TYPE rental_status AS ENUM
('awaiting_payment','active','completed','terminated');

CREATE TYPE payment_status AS ENUM
('pending','successful','failed','refunded');

CREATE TYPE schedule_status AS ENUM
('pending','paid','overdue');

CREATE TYPE invoice_status AS ENUM
('pending','paid','void','overdue');

CREATE TYPE property_approval_status AS ENUM
('draft','pending','approved','rejected','suspended');

CREATE TYPE user_status AS ENUM
('active','suspended','deactivated');

-- =========================================================
-- USERS
-- =========================================================
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  password_hash VARCHAR NOT NULL,
  phone_number VARCHAR,
  status user_status NOT NULL DEFAULT 'active',
  deleted_at TIMESTAMP NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_users_created_at ON users(created_at);
CREATE INDEX idx_users_status ON users(status);

-- =========================================================
-- ROLES
-- =========================================================
CREATE TABLE roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR UNIQUE NOT NULL
);

CREATE TABLE user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  role_id UUID NOT NULL REFERENCES roles(id),
  assigned_at TIMESTAMP DEFAULT NOW(),
  revoked_at TIMESTAMP
);
CREATE INDEX idx_user_roles_user ON user_roles(user_id);

-- =========================================================
-- CATEGORIES
-- =========================================================
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR UNIQUE NOT NULL,
  description TEXT,
  display_order INT NOT NULL DEFAULT 0
);

-- =========================================================
-- MANAGER APPLICATIONS
-- =========================================================
CREATE TABLE property_manager_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  reason TEXT NOT NULL,
  status manager_application_status NOT NULL DEFAULT 'pending',
  reviewed_by UUID REFERENCES users(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  CHECK (
    (status = 'pending' AND reviewed_by IS NULL AND reviewed_at IS NULL)
    OR
    (status IN ('approved','rejected') AND reviewed_by IS NOT NULL AND reviewed_at)
  )
);
CREATE INDEX idx_manager_app_status_created ON property_manager_applications(status, created_at);
CREATE UNIQUE INDEX idx_unique_pending_application ON property_manager_applications(user_id) WHERE status = 'pending';
CREATE INDEX idx_manager_app_user_created ON property_manager_applications(user_id, created_at DESC);
CREATE INDEX idx_manager_app_user_status ON property_manager_applications(user_id, status);

-- =========================================================
-- PROPERTIES
-- =========================================================
CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL,
  description TEXT,
  address VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  state VARCHAR NOT NULL,
  pricing_unit pricing_unit NOT NULL,
  base_price NUMERIC(12,2) NOT NULL CHECK(base_price >=0),
  approval_status property_approval_status NOT NULL DEFAULT 'draft',
  availability_status property_availability_status NOT NULL DEFAULT 'available',
  category_id UUID REFERENCES categories(id) ON DELETE RESTRICT,
  manager_id UUID NOT NULL REFERENCES users(id),
  approved_by UUID REFERENCES users(id) ON DELETE SET NULL,
  approved_at TIMESTAMP,
  rejection_reason TEXT,
  rejected_by UUID REFERENCES users(id) ON DELETE SET NULL,
  rejected_at TIMESTAMP,
  suspended_by UUID REFERENCES users(id) ON DELETE SET NULL,
  suspended_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMP NULL,
  CHECK (
    (approval_status IN ('draft','pending') AND approved_by IS NULL AND approved_at IS NULL AND rejected_by IS NULL AND rejected_at IS NULL AND rejection_reason IS NULL AND suspended_by IS NULL AND suspended_at IS NULL)
    OR
    (approval_status = 'approved' AND approved_by IS NOT NULL AND approved_at IS NOT NULL)
    OR
    (approval_status = 'rejected' AND rejected_by IS NOT NULL AND rejected_at IS NOT NULL AND rejection_reason IS NOT NULL)
    OR
    (approval_status = 'suspended' AND suspended_by IS NOT NULL AND suspended_at IS NOT NULL)
  )
);
CREATE INDEX idx_properties_manager_id ON properties(manager_id);
CREATE INDEX idx_properties_category_id ON properties(category_id);
CREATE INDEX idx_properties_location ON properties(city,state);
CREATE INDEX idx_properties_active ON properties(manager_id) WHERE deleted_at IS NULL;

-- =========================================================
-- PROPERTY IMAGES
-- =========================================================
CREATE TABLE property_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  image_url VARCHAR NOT NULL,
  public_id VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);
CREATE INDEX idx_property_images_property_id ON property_images(property_id);

-- Trigger to enforce max 5 images per property
CREATE OR REPLACE FUNCTION check_property_images_limit()
RETURNS trigger AS $$
DECLARE cnt INT;
BEGIN
  SELECT COUNT(*) INTO cnt FROM property_images WHERE property_id = NEW.property_id;
  IF cnt >= 5 THEN
    RAISE EXCEPTION 'Maximum 5 images allowed per property';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER trg_property_images_limit BEFORE INSERT ON property_images
FOR EACH ROW EXECUTE FUNCTION check_property_images_limit();

-- =========================================================
-- BOOKINGS
-- =========================================================
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  property_id UUID NOT NULL REFERENCES properties(id),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  proposed_amount NUMERIC(12,2),
  status booking_status NOT NULL DEFAULT 'pending',
  expires_at TIMESTAMP,
  cancelled_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  CHECK(end_date >= start_date)
);
CREATE INDEX idx_booking_property ON bookings(property_id);
CREATE INDEX idx_booking_user ON bookings(user_id);

ALTER TABLE bookings
ADD CONSTRAINT no_overlapping_bookings
EXCLUDE USING gist (
  property_id WITH =,
  daterange(start_date,end_date,'[)') WITH &&
)
WHERE (status IN ('pending','approved') AND cancelled_at IS NULL);

-- =========================================================
-- RENTALS
-- =========================================================
CREATE TABLE rentals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID UNIQUE NOT NULL REFERENCES bookings(id) ON DELETE RESTRICT,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE RESTRICT,
  lease_start DATE NOT NULL,
  lease_end DATE NOT NULL,
  pricing_unit pricing_unit NOT NULL,
  agreed_price NUMERIC(12,2) NOT NULL CHECK(agreed_price >= 0),
  status rental_status NOT NULL DEFAULT 'awaiting_payment',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_rental_property ON rentals(property_id);
CREATE INDEX idx_rental_user ON rentals(user_id);
CREATE INDEX idx_rentals_status ON rentals(status);

-- =========================================================
-- PAYMENT SCHEDULES
-- =========================================================
CREATE TABLE payment_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rental_id UUID NOT NULL REFERENCES rentals(id) ON DELETE CASCADE,
  due_date DATE NOT NULL,
  amount NUMERIC(12,2) NOT NULL CHECK(amount > 0),
  status schedule_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_schedule_rental ON payment_schedules(rental_id);
CREATE INDEX idx_schedule_status ON payment_schedules(status);
CREATE INDEX idx_schedule_due_date ON payment_schedules(due_date);

-- =========================================================
-- INVOICES
-- =========================================================
CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rental_id UUID NOT NULL REFERENCES rentals(id) ON DELETE CASCADE,
  total_amount NUMERIC(12,2) NOT NULL,
  status invoice_status NOT NULL DEFAULT 'pending',
  stripe_checkout_session_id VARCHAR UNIQUE,
  stripe_payment_intent_id VARCHAR UNIQUE,
  due_date DATE,
  paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
CREATE INDEX idx_invoice_rental ON invoices(rental_id);
CREATE INDEX idx_invoice_stripe_session ON invoices(stripe_checkout_session_id);
CREATE INDEX idx_invoice_payment_intent ON invoices(stripe_payment_intent_id);

-- =========================================================
-- PAYMENTS
-- =========================================================
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
  amount NUMERIC(12,2) NOT NULL CHECK(amount > 0),
  payment_status payment_status NOT NULL,
  stripe_charge_id VARCHAR UNIQUE,
  paid_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  CHECK((payment_status = 'successful' AND paid_at IS NOT NULL) OR (payment_status <> 'successful'))
);
CREATE INDEX idx_payment_invoice ON payments(invoice_id);
CREATE INDEX idx_payment_status ON payments(payment_status);

-- =========================================================
-- PLATFORM SETTINGS
-- =========================================================
CREATE TABLE platform_settings (
  id BOOLEAN PRIMARY KEY DEFAULT TRUE,
  platform_fee_percent NUMERIC(5,2) NOT NULL DEFAULT 10
);
INSERT INTO platform_settings(id) VALUES(TRUE);

-- =========================================================
-- PROPERTY EARNINGS
-- =========================================================
CREATE TABLE property_earnings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_id UUID UNIQUE NOT NULL REFERENCES payments(id) ON DELETE CASCADE,
  property_id UUID NOT NULL REFERENCES properties(id),
  rental_id UUID NOT NULL REFERENCES rentals(id),
  gross_amount NUMERIC(12,2) NOT NULL,
  platform_fee NUMERIC(12,2) NOT NULL,
  manager_earnings NUMERIC(12,2) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
CREATE INDEX idx_earnings_property ON property_earnings(property_id);
CREATE INDEX idx_earnings_rental ON property_earnings(rental_id);
CREATE INDEX idx_earnings_created ON property_earnings(created_at);

-- =========================================================
-- AUTOMATIC EARNINGS TRIGGER
-- =========================================================
CREATE OR REPLACE FUNCTION generate_property_earnings()
RETURNS TRIGGER AS $$
DECLARE
  v_property UUID;
  v_rental UUID;
  v_percent NUMERIC;
BEGIN
  IF NEW.payment_status <> 'successful' THEN
    RETURN NEW;
  END IF;

  IF EXISTS(SELECT 1 FROM property_earnings WHERE payment_id = NEW.id) THEN
    RETURN NEW;
  END IF;

  SELECT r.property_id, r.id
  INTO v_property, v_rental
  FROM invoices i
  JOIN rentals r ON r.id = i.rental_id
  WHERE i.id = NEW.invoice_id;

  SELECT platform_fee_percent INTO v_percent FROM platform_settings;

  INSERT INTO property_earnings(payment_id, property_id, rental_id, gross_amount, platform_fee, manager_earnings)
  VALUES(NEW.id, v_property, v_rental, NEW.amount, (NEW.amount*v_percent)/100, NEW.amount-((NEW.amount*v_percent)/100));

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_generate_property_earnings
AFTER INSERT OR UPDATE OF payment_status ON payments
FOR EACH ROW
WHEN (NEW.payment_status='successful')
EXECUTE FUNCTION generate_property_earnings();