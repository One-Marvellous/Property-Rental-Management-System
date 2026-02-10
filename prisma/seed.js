/**
 * Prisma Seed Script
 *
 * Seeds:
 *  - Default system roles (admin, user, manager)
 *  - Initial admin user with hashed password
 *  - Assigns admin role to the seeded admin
 *
 * Safe to run multiple times (idempotent).
 */

import bcrypt from 'bcrypt';
import { prisma } from '../src/config/db.js';
import { ENV } from '../src/config/env.js';
import { UserRole } from '../src/models/role.js';

async function main() {
  console.log('🌱 Starting database seed...');

  /**
   * 1️⃣ Seed default roles using single source of truth
   */
  const roleNames = Object.values(UserRole);
  const seededRoles = {};

  for (const name of roleNames) {
    const role = await prisma.roles.upsert({
      where: { name },
      update: {},
      create: { name },
    });

    seededRoles[name] = role;
  }

  console.log('✅ Roles seeded');

  /**
   * 2️⃣ Seed initial admin user (only once)
   */
  const adminEmail = ENV.ADMIN_EMAIL;
  const adminPassword = ENV.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set in ENV');
  }

  let adminUser = await prisma.users.findUnique({
    where: { email: adminEmail },
  });

  if (!adminUser) {
    const hashedPassword = await bcrypt.hash(adminPassword, 12);

    adminUser = await prisma.users.create({
      data: {
        first_name: 'System',
        last_name: 'Administrator',
        email: adminEmail,
        password_hash: hashedPassword,
        phone_number: null,
      },
    });

    console.log('✅ Admin user created');
  } else {
    console.log('ℹ️ Admin user already exists');
  }

  /**
   * 3️⃣ Ensure admin role is assigned (only once, active role)
   */
  const adminRoleId = seededRoles[UserRole.ADMIN].id;

  const existingAdminRole = await prisma.user_roles.findFirst({
    where: {
      user_id: adminUser.id,
      role_id: adminRoleId,
      revoked_at: null, // only active role counts
    },
  });

  if (!existingAdminRole) {
    await prisma.user_roles.create({
      data: {
        user_id: adminUser.id,
        role_id: adminRoleId,
        assigned_at: new Date(),
      },
    });

    console.log('✅ Admin role assigned to admin user');
  } else {
    console.log('ℹ️ Admin role already assigned');
  }

  console.log('🎉 Database seeding completed successfully');
}

/**
 * Execute seed script
 */
main()
  .catch((error) => {
    console.error('❌ Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
