import bcrypt from 'bcrypt';
import { jwt } from '../config/jwt.js';
import { prisma } from '../config/db.js';

class AuthService {
  /**
   * Register a new user with default 'tenant' role
   * @param {Object} userData - User registration data
   * @returns {Object} User profile and tokens
   */
  async registerUser(userData) {
    const { email, password, firstName, lastName, phoneNumber } = userData;

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('Email already registered');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        email,
        password_hash: passwordHash,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
      },
    });

    const tenantRole = await prisma.roles.findFirst({
      where: { name: 'tenant' },
    });

    if (!tenantRole) {
      await prisma.users.delete({
        where: { id: user.id },
      });
      throw new Error('Tenant role not found in database');
    }

    await prisma.user_roles.create({
      data: {
        user_id: user.id,
        role_id: tenantRole.id,
      },
    });

    const tokens = jwt.create({
      userId: user.id,
      activeRole: 'tenant',
    });

    return {
      user: {
        userId: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        phoneNumber: user.phone_number,
        activeRole: 'tenant',
        createdAt: user.created_at,
      },
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  async loginUser(email, password) {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (user.is_suspended) {
      throw new Error('Account suspended');
    }

    const isValidPassword = await bcrypt.compare(password, user.password_hash);

    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    const userRole = await prisma.user_roles.findFirst({
      where: {
        user_id: user.id,
        revoked_at: null,
      },
      include: {
        roles: true,
      },
      orderBy: {
        assigned_at: 'desc',
      },
    });

    const activeRole = userRole?.roles?.name || 'tenant';

    const tokens = jwt.create({
      userId: user.id,
      activeRole: activeRole,
    });

    return {
      user: {
        userId: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        phoneNumber: user.phone_number,
        activeRole: activeRole,
        createdAt: user.created_at,
      },
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  async refreshTokens(refreshToken) {
    try {
      const newTokens = await jwt.refresh(refreshToken);

      return {
        accessToken: newTokens.accessToken,
        refreshToken: newTokens.refreshToken,
      };
    } catch (error) {
      throw new Error('Invalid refresh token', { cause: error });
    }
  }
}

export default new AuthService();
