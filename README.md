# Property Rental Management System

## Overview

The **Property Rental Management System** is a scalable backend
application designed to manage the complete lifecycle of property
rentals --- from property listing and booking requests to rental
activation and structured payment tracking.

It supports **multi-role access control** (Admin, User, and Property
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
  - Full payments
  - Installment payments
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
- **ORM**: Prisma
- **Code Formatting**: Prettier
- **Environment Management**: dotenv

---

## System Lifecycle Flow

```mermaid
graph LR
  A[Property Listed] --> B[Booking Request]
  B --> C[Manager Approval]
  C --> D[Rental Created]
  D --> E[Payment Schedule Created]
  E --> F[Invoice Created]
  F --> G[Payment]
```

---

## Roles & Permissions

### Admin

- Manage users and roles
- Approve/reject property manager applications
- Manage categories
- Suspend any property

### Property Manager

- Manage own properties and images
- Approve/reject bookings for owned properties
- View rentals and payments related to owned properties

### User

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

5. **Configure environment variables**
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
     ...
     ```

     **For Cloud PostgreSQL (Render or Neon):**

     ```env
     PORT=3000
     DATABASE_URL=postgresql://user:password@host:port/database
     NODE_ENV=development
     ...
     ```

   > **Note**: see `Integration Setup` for setup for Cloudinary and Stripe

6. **Generate Prisma Client**

   Generate the Prisma Client to enable database access in your application:

   ```bash
   npx prisma generate
   ```

7. **Seed the database**

   Populate the database with initial seed data (roles and default configurations):

   ```bash
   npm run seed
   ```

   > **Note**: This command is configured in `prisma.config.ts` It initializes essential data required for the application to function properly.

8. **Run the application**

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000` (or the port specified in `.env`)

## Integration Setup

### Stripe Payment Integration

This project uses Stripe for secure payment processing. To enable Stripe:

1. **Create a Stripe account** at https://dashboard.stripe.com/register
2. **Get your API keys** from the Stripe dashboard (Developers > API keys)
3. Change the following variables in your `.env` file:

   ```env
   STRIPE_SECRET_KEY=sk_test_...
   FRONTEND_URL=http://localhost:3000
   ENDPOINT_SECRET=your_stripe_webhook_secret
   ```

4. The backend uses `STRIPE_SECRET_KEY` for server-side API calls and webhook verification.
5. Webhook events are handled at `/webhook` (see routes and docs).
6. To test payments, use Stripe's test card numbers and the test mode.

**Stripe config:**

- See [src/config/stripe.js](src/config/stripe.js) for initialization
- Payment flows are managed in the user service and controller

### Cloudinary Image Integration

Cloudinary is used for image uploads and management. To enable Cloudinary:

1. **Create a Cloudinary account** at https://cloudinary.com/
2. **Get your cloud name, API key, and API secret** from the Cloudinary dashboard
3. Add the following to your `.env` file:

   ```env
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. The backend configures Cloudinary in production mode (see [src/utils/imageUploader](src/utils/imageUploader.js))
5. Image uploads, deletions, and transformations are handled via Cloudinary APIs

**Cloudinary config:**

- See [src/utils/imageUploader](src/utils/imageUploader.js) for setup and usage
- Ensure your environment variables are set before deploying

---

## API Documentation

The API documentation is available through **Swagger UI** which provides interactive API exploration and testing.

### Accessing the Documentation

Once the server is running, visit:

```
http://localhost:3000/api/doc
```

> **Note**: This assumes your port is set to 3000 in `.env`

The Swagger UI interface allows you to:

- View all available endpoints with detailed descriptions
- See request/response schemas
- Test API endpoints directly from the browser
- Review authentication requirements for protected endpoints
- Understand pagination and filtering options

# Importing API Documentation to Postman

You can easily migrate and test the API endpoints in Postman by importing the OpenAPI/Swagger documentation:

1. **Start the server**: Make sure your server is running locally `npm run dev` (usually on port 3000).
2. **Open Postman** and click on **Import**.
3. Select the **Link** tab and enter:

   ```
   http://localhost:3000/api/doc-json
   ```

4. Click **Continue** and follow the prompts to import the API collection.

> **Note:** The server **must be running** for Postman to access the documentation at this URL.

### API Endpoints Overview

- **Authentication**: `/api/v1/auth` - Register, login, and token refresh
- **Admin**: `/api/v1/admin` - User management, category management, approvals
- **Property Manager**: `/api/v1/manager` - Property and booking management
- **User**: `/api/v1/user` - User profile and rental information
- **Property**: `/api/v1/properties` - Browse properties related information
- **Category**: `/api/v1/categories` - Browse, edit create delete category related information
- **Health**: `/api/v1/health` - Server health check

## Database Schema

The system uses the following main entities:

- **users**: Core user accounts responsible for authentication and platform access.
- **roles**: Role definitions (user, manager, admin).
- **user_roles**: Junction table managing many-to-many relationships between users and roles.
- **property_manager_applications**: Handles applications submitted by users requesting property manager privileges.
- **categories**: Defines classification groups for properties (e.g., Apartment, Event Hall, Short-let, Office Space).
- **properties**: Represents property listings created by approved property managers.
- **property_images**: Images associated with properties
- **bookings**: Represents booking requests made by users for a property
- **rentals**: Represents confirmed rental agreements derived from approved bookings.
- **payment_schedules**: Defines structured payment obligations for a rental.
- **invoices**: Represents billing events generated for a rental.
- **payments**: Represents actual financial transactions.
- **property_earnings**: Represents property earnings ledger table.

![System Flow](<assets/ER diagram.svg>)

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

### Code Quality

Before committing your code, check for errors within your code:

```bash
npm run lint
```

### Project Structure

```
.
├── src/
│   ├── server.js        # Main server entry point
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── routes/          # API route definitions
│   ├── models/          # Type definitions
│   ├── middlewares/     # Express middleware functions
│   ├── services/        # Business logic and data access layer
│   ├── validators/      # Input validation logic
│   └── utils/           # Utility functions and helpers
├── prisma/
│   └── schema.prisma    # Prisma ORM schema
├── scripts/
│   └── prm.sql          # PostgreSQL database schema
├── docs/                # Contains Swagger Documentation for API
├── .env.sample          # Environment variables template
├── .env                 # Environment variables
├── .gitignore           # Git ignore rules
├── .prettierrc          # Prettier configuration
├── .prettierignore      # Prettier ignore rules
├── prisma.config.ts     # Prisma configuration
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Dependency lock file
└── README.md            # This file
```

## Best Practices

1. **Always install dependencies** with `npm i` before starting development
2. **Set up your environment variables** by creating a `.env` file from `.env.sample`
3. **Format your code** using `npm run format` and check for errors within your code using `npm run lint` before pushing changes
4. **Never commit** the `.env`, `generated` or `node_modules` files
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
4. Check for any errors withing your code with `npm run lint`
5. Commit with clear, descriptive messages
6. Submit a pull request

## License

ISC

## Support

For issues, questions, or contributions, please open an issue or contact the development team or [TS Academy](https://tsacademyonline.com)

- Marvellous Fawole — https://github.com/One-Marvellous
- Damilola Adegbite — https://github.com/dax-side
- John Oluwatobi — https://github.com/JOHNNY-OBA
- Sunday Alabi — https://github.com/iamalabisunday
- Eliot — https://github.com/kingx7-cyber
- Olofintila Ayomide — https://github.com/olofus0204
- Gideon Omeje — https://github.com/gidzystar57
- Ibrahim Sulaimon — https://github.com/Sulai007
- Aghorunse Boluwatife — https://github.com/Teefelove
- Olofintila Ayomide — https://github.com/olofus0204
- Emmanuel Testimony — https://github.com/Angel27lab
