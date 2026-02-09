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


-- ================= MANAGER APPLICATIONS =================

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
    (status IN ('approved','rejected','cancelled') AND reviewed_by IS NOT NULL AND reviewed_at IS NOT NULL)
  )
);

CREATE UNIQUE INDEX idx_unique_pending_application
ON property_manager_applications(user_id)
WHERE status = 'pending';


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

  created_at TIMESTAMP NOT NULL DEFAULT NOW()

   CHECK (
    (approval_status IN ('draft','pending') AND approved_by IS NULL AND approved_at IS NULL)
    OR
    (approval_status = 'approved' AND approved_by IS NOT NULL AND approved_at IS NOT NULL)
    OR
    (approval_status IN ('rejected','suspended') AND approved_by IS NOT NULL)
  )
);


CREATE TABLE property_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,

  image_url VARCHAR NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);


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
