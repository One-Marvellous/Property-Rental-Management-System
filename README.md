# Property Rental Management System

## Overview

The **Property Rental Management System** is a scalable backend
application designed to manage the complete lifecycle of property
rentals --- from property listing and booking requests to rental
activation and structured payment tracking.

It supports **multi-role access control** (Admin, Tenant, and Property
Manager) with secure authentication, role switching, and an approval
workflow for property manager applications. The system is built as a
**production-ready MVP** with a normalized PostgreSQL schema, RESTful
API architecture, and flexible pricing models suitable for apartments,
hotels, and event spaces.

---

## Key Features

### 🔐 Authentication & Security

- JWT-based authentication
- Role-Based Access Control (RBAC)
- Dynamic role switching (similar to Fiverr buyer/seller model)
- Secure admin approval workflow for property managers

### 🏠 Property & Booking Management

- Property listing with categories and images
- Booking request and approval flow
- Automatic rental creation after booking approval
- Support for multiple pricing units (monthly, daily, nightly, event)

### 💳 Payments & Transactions

- Structured payment tracking per rental
- Supports:
  - Deposits
  - Partial payments
  - Recurring rent payments
  - Late fees _(future-ready)_
  - Refunds
- Payment history for tenants, managers, and admins

### 🧩 Scalable Architecture

- Fully normalized PostgreSQL schema
- Clean REST API design
- Transaction-safe admin operations
- Designed for SaaS scalability and future extensions

---

## Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma (configured)
- **Code Formatting**: Prettier
- **Environment Management**: dotenv

---

## System Lifecycle Flow

    Property Listed → Booking Request → Manager Approval → Rental Created → Payments Tracked → Rental Completed/Terminated

---

## Roles & Permissions

### Admin

- Manage users and roles
- Approve/reject property manager applications
- Manage categories
- View all bookings, rentals, and payments
- Delete any property

### Property Manager

- Manage own properties and images
- Approve/reject bookings for owned properties
- View rentals and payments related to owned properties

### Tenant

- Register and authenticate
- Browse properties
- Create bookings
- Make payments
- View personal rentals and payment history

---

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- PostgreSQL database (local or cloud-hosted)

### Installation

1. **Clone the repository and switch to development branch**

   ```bash
   git clone https://github.com/One-Marvellous/Property-Rental-Management-System.git
   cd property-rental-management-system
   git checkout development
   ```

   > **Note**: All feature branches should be created from the `development` branch. The `main` branch is reserved for production releases.

2. **Install dependencies**

   ```bash
   npm i
   ```

3. **Set up your PostgreSQL database**

   Choose one of the following options:

   #### Option A: Local PostgreSQL (Recommended for Development)

   If you have PostgreSQL installed locally:

   ```bash
   createdb -U postgres prm
   ```

   Or if your PostgreSQL user is different:

   ```bash
   createdb -U <your-username> prm
   ```

   > **Note**: The `createdb` command must be in your PATH. If unavailable, use psql instead:
   >
   > ```bash
   > psql -U postgres -c "CREATE DATABASE prm;"
   > ```

   #### Option B: Cloud PostgreSQL with Render

   For a free or paid managed PostgreSQL instance:
   1. Go to [Render Dashboard](https://dashboard.render.com/new/database)
   2. Click **+ New** → **Postgres**
   3. Fill in the database name (e.g., `prm`)
   4. Choose your preferred region
   5. Select instance type (Free tier available)
   6. Click **Create Database**
   7. Copy the **External Connection String** (format: `postgresql://user:password@host:port/database`)
   8. Save it for the **Configure environment variables** step below

   #### Option C: Cloud PostgreSQL with Neon

   For a fast serverless PostgreSQL database:
   1. Sign up at [Neon](https://neon.tech/)
   2. Create a new project
   3. A database named `neondb` will be created automatically
   4. Copy the **Connection String** from the Connection Details panel
   5. Save it for the **Configure environment variables** step below

4. **Initialize the database schema**

   Execute the SQL script from `scripts/prm.sql` to create all tables, enums, and indexes.

   ##### For Local PostgreSQL:

   ```bash
   psql -U postgres -d prm -f scripts/prm.sql
   ```

   Or if your PostgreSQL user is different:

   ```bash
   psql -U <your-username> -d prm -f scripts/prm.sql
   ```

   ##### For Cloud PostgreSQL (Render or Neon):

   Use your connection string directly:

   ```bash
   psql "postgresql://user:password@host:port/database" -f scripts/prm.sql
   ```

   Or run interactively in psql:

   ```bash
   psql "postgresql://user:password@host:port/database"
   # Inside psql prompt:
   \i scripts/prm.sql
   ```

   > **Alternative**: Let Prisma handle schema initialization. After setting `DATABASE_URL` in `.env`, Prisma will introspect and pull the schema (steps 5-6 below).

5. **Pull database schema into Prisma**

   Introspect the database to generate the Prisma schema:

   ```bash
   npx prisma db pull
   ```

6. **Generate Prisma Client**

   Generate the Prisma Client to enable database access in your application:

   ```bash
   npx prisma generate
   ```

7. **Configure environment variables**
   - Copy the sample environment file:
     ```bash
     cp .env.sample .env
     ```
   - Update `.env` with your database connection:

     **For Local PostgreSQL:**

     ```env
     PORT=3000
     DATABASE_URL=postgresql://postgres:password@localhost:5432/prm
     NODE_ENV=development
     ```

     **For Cloud PostgreSQL (Render or Neon):**

     ```env
     PORT=3000
     DATABASE_URL=postgresql://user:password@host:port/database
     NODE_ENV=development
     ```

8. **Run the application**

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000` (or the port specified in `.env`)

## Database Schema

The system uses the following main entities:

- **users**: Core user accounts with authentication
- **roles**: Role definitions (tenant, property_manager, admin)
- **user_roles**: Role assignments with audit trail
- **property_manager_applications**: Applications for becoming a property manager
- **properties**: Property listings with pricing and status
- **property_images**: Images associated with properties
- **bookings**: Property booking requests
- **rentals**: Active rental agreements
- **payments**: Payment transactions and tracking

## Development Workflow

### Code Formatting

Before committing your code, ensure all files are properly formatted:

```bash
npm run format
```

To check if files need formatting without modifying them:

```bash
npm run format:check
```

### Project Structure

```
.
├── src/
│   ├── server.js        # Main server entry point
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── routes/          # API route definitions
│   ├── middlewares/     # Express middleware functions
│   ├── services/        # Business logic and data access layer
│   ├── validators/      # Input validation logic
│   └── utils/           # Utility functions and helpers
├── prisma/
│   └── schema.prisma    # Prisma ORM schema
├── scripts/
│   └── prm.sql          # PostgreSQL database schema
├── docs/                # Documentation
├── .env.sample          # Environment variables template
├── .env                 # Environment variables
├── .gitignore           # Git ignore rules
├── .prettierrc           # Prettier configuration
├── .prettierignore       # Prettier ignore rules
├── prisma.config.ts     # Prisma configuration
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Dependency lock file
└── README.md            # This file
```

## Best Practices

1. **Always install dependencies** with `npm i` before starting development
2. **Set up your environment variables** by creating a `.env` file from `.env.sample`
3. **Format your code** using `npm run format` before pushing changes
4. **Never commit** the `.env` file (it's in `.gitignore`)
5. **Use descriptive commit messages** and keep commits atomic

## Git Workflow

```bash
# Before pushing changes, format your code
npm run format
npm run lint

# Stage and commit your changes
git add .
git commit -m "Description of changes"

# Push to remote
git push origin <branch-name>
```

## Documentation

Full API documentation and additional setup guides are available in:

- `/docs` folder
- Check [project documentation site](https://www.postman.com/one-marvellous/property-management-system) for detailed API endpoints
- Database schema diagram is available in `scripts/prm.sql`

For detailed information on the database structure, refer to the SQL schema file at `scripts/prm.sql`.

## Troubleshooting

**Database connection issues:**

- Verify PostgreSQL is running
- Check `DATABASE_URL` in `.env` matches your setup
- Ensure the `prm` database exists

**Port already in use:**

- Change the `PORT` in `.env` to an available port
- Or kill the process using the current port

**Dependencies issues:**

- Delete `node_modules` and `package-lock.json`
- Run `npm i` again

## Contributing

1. Create a feature branch from `development`
2. Make your changes and test thoroughly
3. Format your code with `npm run format`
4. Commit with clear, descriptive messages
5. Submit a pull request

## License

ISC

## Support

For issues, questions, or contributions, please open an issue or contact the development team.
