-- Enable UUID + range support
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "btree_gist";


-- ================= ENUM TYPES =================

CREATE TYPE manager_application_status AS ENUM ('pending','approved','rejected','cancelled');

CREATE TYPE pricing_unit AS ENUM ('month','night','day','event');

CREATE TYPE property_availability_status AS ENUM ('available','occupied','maintenance');

CREATE TYPE booking_status AS ENUM ('pending','approved','rejected','cancelled');

CREATE TYPE rental_status AS ENUM ('active','completed','terminated');

CREATE TYPE payment_status AS ENUM ('pending','successful','failed','refunded');

CREATE TYPE payment_category AS ENUM ('deposit','full_payment','part_payment','monthly');

CREATE TYPE property_approval_status AS ENUM ('draft','pending','approved','rejected','suspended');

CREATE TYPE schedule_status AS ENUM ('pending', 'paid', 'overdue');


-- ================= USERS & ROLES =================

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password_hash VARCHAR NOT NULL,
  phone_number VARCHAR,
  is_suspended BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Added indexes
CREATE INDEX idx_users_is_suspended ON users(is_suspended);
CREATE INDEX idx_users_created_at ON users(created_at);


CREATE TABLE roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  role_id UUID NOT NULL REFERENCES roles(id) ON DELETE RESTRICT,

  assigned_by UUID REFERENCES users(id) ON DELETE SET NULL,
  assigned_at TIMESTAMP NOT NULL DEFAULT NOW(),

  revoked_by UUID REFERENCES users(id) ON DELETE SET NULL,
  revoked_at TIMESTAMP,

  created_at TIMESTAMP NOT NULL DEFAULT NOW(),

  UNIQUE (user_id, role_id, revoked_at)
);

CREATE INDEX idx_user_roles_active
ON user_roles(user_id, role_id)
WHERE revoked_at IS NULL;

-- Added indexes
CREATE INDEX idx_user_roles_role_id_active
ON user_roles(role_id)
WHERE revoked_at IS NULL;

CREATE INDEX idx_user_roles_user_id
ON user_roles(user_id);


-- ================= MANAGER APPLICATIONS =================

CREATE TABLE property_manager_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,

  reason TEXT NOT NULL,

  status manager_application_status NOT NULL DEFAULT 'pending',

  reviewed_by UUID REFERENCES users(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMP,

  cancelled_by UUID REFERENCES users(id) ON DELETE SET NULL,
  cancelled_at TIMESTAMP,

  created_at TIMESTAMP NOT NULL DEFAULT NOW(),

  CHECK (
    (status = 'pending'
      AND reviewed_by IS NULL
      AND reviewed_at IS NULL
      AND cancelled_by IS NULL)

    OR

    -- Approved or rejected: must be reviewed by admin
    (status IN ('approved','rejected')
      AND reviewed_by IS NOT NULL
      AND reviewed_at IS NOT NULL
      AND cancelled_by IS NULL)

    OR

    -- Cancelled: can be cancelled by user OR admin
    (status = 'cancelled'
      AND cancelled_by IS NOT NULL)
  )
);


CREATE INDEX idx_manager_app_status_created
ON property_manager_applications(status, created_at);

CREATE UNIQUE INDEX idx_unique_pending_application
ON property_manager_applications(user_id)
WHERE status = 'pending';

-- Added indexes
CREATE INDEX idx_manager_app_user_created
ON property_manager_applications(user_id, created_at DESC);

-- composite index used by queries filtering on user + status
CREATE INDEX idx_manager_app_user_status
ON property_manager_applications(user_id, status);


-- ================= PROPERTY STRUCTURE =================

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR NOT NULL UNIQUE,
  description TEXT
);

CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  title VARCHAR NOT NULL,
  description TEXT,
  address VARCHAR NOT NULL,
  city VARCHAR NOT NULL,
  state VARCHAR NOT NULL,

  pricing_unit pricing_unit NOT NULL,
  base_price NUMERIC(12,2) NOT NULL CHECK (base_price >= 0),

  approval_status property_approval_status NOT NULL DEFAULT 'draft',

  availability_status property_availability_status NOT NULL DEFAULT 'available',

  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  manager_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,

  approved_by UUID REFERENCES users(id) ON DELETE SET NULL,
  approved_at TIMESTAMP,
  rejection_reason TEXT,

  created_at TIMESTAMP NOT NULL DEFAULT NOW(),

  CHECK (
    (approval_status IN ('draft','pending') AND approved_by IS NULL AND approved_at IS NULL)
    OR
    (approval_status = 'approved' AND approved_by IS NOT NULL AND approved_at IS NOT NULL)
    OR
    (approval_status IN ('rejected','suspended') AND approved_by IS NOT NULL)
  )
);

-- Added indexes
CREATE INDEX idx_properties_approval_availability
ON properties(approval_status, availability_status);

CREATE INDEX idx_properties_approval_availability_created
ON properties(approval_status, availability_status, created_at);

CREATE INDEX idx_properties_manager_id ON properties(manager_id);
CREATE INDEX idx_properties_category_id ON properties(category_id);
CREATE INDEX idx_properties_city_state ON properties(city, state);
CREATE INDEX idx_properties_created_at ON properties(created_at);


CREATE TABLE property_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,

  image_url VARCHAR NOT NULL,
  public_id VARCHAR,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Added index
CREATE INDEX idx_property_images_property_id
ON property_images(property_id);

-- Trigger function to enforce max 5 images per property
CREATE OR REPLACE FUNCTION check_property_images_limit()
RETURNS trigger AS $$
BEGIN
  PERFORM 1 FROM property_images WHERE property_id = NEW.property_id LIMIT 1;
  -- count existing images
  IF (SELECT COUNT(*) FROM property_images WHERE property_id = NEW.property_id) >= 5 THEN
    RAISE EXCEPTION 'Maximum of 5 images allowed per property';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger that runs before insert to prevent exceeding the limit
CREATE TRIGGER trg_check_property_images_limit
BEFORE INSERT ON property_images
FOR EACH ROW EXECUTE FUNCTION check_property_images_limit();


-- ================= BOOKINGS =================

CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE RESTRICT,

  start_date DATE NOT NULL,
  end_date DATE NOT NULL,

  proposed_amount NUMERIC(12,2),

  status booking_status NOT NULL DEFAULT 'pending',

  cancelled_at TIMESTAMP,
  cancellation_reason TEXT,

  created_at TIMESTAMP NOT NULL DEFAULT NOW(),

  CHECK (end_date >= start_date)
);

-- Prevent overlapping bookings per property
ALTER TABLE bookings
ADD CONSTRAINT no_overlapping_bookings
EXCLUDE USING gist (
  property_id WITH =,
  daterange(start_date, end_date, '[]') WITH &&
)
WHERE (status IN ('pending','approved'));

-- Added indexes
CREATE INDEX idx_bookings_user_id_created
ON bookings(user_id, created_at DESC);

CREATE INDEX idx_bookings_user_status_created
ON bookings(user_id, status, created_at DESC);

CREATE INDEX idx_bookings_property_id_dates
ON bookings(property_id, start_date, end_date);

CREATE INDEX idx_bookings_status ON bookings(status);


-- ================= RENTALS =================

CREATE TABLE rentals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  booking_id UUID NOT NULL UNIQUE REFERENCES bookings(id) ON DELETE RESTRICT,

  user_id UUID NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE RESTRICT,

  lease_start DATE NOT NULL,
  lease_end DATE NOT NULL,

  pricing_unit pricing_unit NOT NULL,
  agreed_price NUMERIC(12,2) NOT NULL CHECK (agreed_price >= 0),

  status rental_status NOT NULL DEFAULT 'active',

  created_at TIMESTAMP NOT NULL DEFAULT NOW(),

  CHECK (lease_end >= lease_start)
);

-- Added indexes
CREATE INDEX idx_rentals_user_id ON rentals(user_id);
CREATE INDEX idx_rentals_property_id ON rentals(property_id);
CREATE INDEX idx_rentals_status ON rentals(status);


-- ================= PAYMENTS =================

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  rental_id UUID NOT NULL REFERENCES rentals(id) ON DELETE RESTRICT,

  amount NUMERIC(12,2) NOT NULL CHECK (amount > 0),

  category payment_category NOT NULL,
  payment_method VARCHAR,

  payment_status payment_status NOT NULL,

  transaction_reference VARCHAR UNIQUE,
  paid_at TIMESTAMP,

  created_at TIMESTAMP NOT NULL DEFAULT NOW(),

  CHECK (
    (payment_status = 'successful' AND paid_at IS NOT NULL)
    OR
    (payment_status <> 'successful')
  )
);

CREATE INDEX idx_payments_rental_id ON payments(rental_id);

-- Added indexes
CREATE INDEX idx_payments_rental_created
ON payments(rental_id, created_at DESC);

CREATE INDEX idx_payments_status ON payments(payment_status);

CREATE TABLE payment_schedules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  rental_id UUID NOT NULL REFERENCES rentals(id) ON DELETE CASCADE,

  due_date DATE NOT NULL,
  amount NUMERIC(12,2) NOT NULL CHECK (amount > 0),

  status schedule_status NOT NULL DEFAULT 'pending', 

  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_schedule_rental_id ON payment_schedules(rental_id);
CREATE INDEX idx_schedule_status ON payment_schedules(status);
CREATE INDEX idx_schedule_due_date ON payment_schedules(due_date);

