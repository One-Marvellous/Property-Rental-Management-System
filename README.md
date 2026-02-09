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

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL (v12 or higher)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd property-rental-management-system
   ```

2. **Install dependencies**

   ```bash
   npm i
   ```

3. **Create the database**

   You can create the database using one of the following methods:

   **Option A: Using createdb command (PostgreSQL CLI utility)**

   ```bash
   createdb -U postgres pms
   ```

   Or if your PostgreSQL user is different:

   ```bash
   createdb -U <your-username> pms
   ```

   > **Note**: The `createdb` command must be run from your terminal/command prompt and requires PostgreSQL to be installed and accessible from your PATH.

   **Option B: Using psql (Interactive PostgreSQL Shell)**

   If `createdb` is not available or you prefer using psql:

   ```bash
   psql -U postgres -c "CREATE DATABASE pms;"
   ```

   Or interactively:

   ```bash
   psql -U postgres
   # Inside psql prompt (you'll see postgres=#):
   CREATE DATABASE pms;
   \q
   ```

4. **Initialize the database schema**

   Execute the SQL script from `scripts/pms.sql` to create all tables, enums, and indexes.

   Choose one of the following methods:

   **Option A: Local PostgreSQL (Default)**

   If PostgreSQL is running locally with default settings:

   ```bash
   psql -U postgres -d pms -f scripts/pms.sql
   ```

   Or if your PostgreSQL user is different:

   ```bash
   psql -U <your-username> -d pms -f scripts/pms.sql
   ```

   **Option B: Remote PostgreSQL Database**

   For a remote PostgreSQL server:

   ```bash
   psql -h <your-host> -U <your-username> -d pms -p <port> -f scripts/pms.sql
   ```

   Example:

   ```bash
   psql -h db.example.com -U admin -d pms -p 5432 -f scripts/pms.sql
   ```

   **Option C: Using Connection String**

   Using a full PostgreSQL connection string:

   ```bash
   psql postgresql://<user>:<password>@<host>:<port>/pms -f scripts/pms.sql
   ```

   Example:

   ```bash
   psql postgresql://admin:password123@db.example.com:5432/pms -f scripts/pms.sql
   ```

   **Option D: Interactive psql Shell**

   You can also run the SQL script manually inside psql:

   ```bash
   psql -U postgres -d pms
   # Inside psql prompt:
   \i scripts/pms.sql
   ```

   > **Note**: Replace `<your-username>`, `<your-host>`, and `<port>` with your actual PostgreSQL credentials and server details.

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
   - Update `.env` with your configuration:
     ```env
     PORT=3000
     DATABASE_URL=postgresql://user:password@localhost:5432/pms
     NODE_ENV=development
     ```

8. **Run the application**
   ```bash
   npm run dev
   ```

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
│   └── pms.sql          # PostgreSQL database schema
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
- Database schema diagram is available in `scripts/pms.sql`

For detailed information on the database structure, refer to the SQL schema file at `scripts/pms.sql`.

## Troubleshooting

**Database connection issues:**

- Verify PostgreSQL is running
- Check `DATABASE_URL` in `.env` matches your setup
- Ensure the `pms` database exists

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
