import bcrypt from 'bcrypt';
import { jwt } from '../config/jwt.js';
import { prisma } from '../config/db.js';
import {
  AppError,
  ConflictError,
  UnauthorizedError,
  ForbiddenError,
} from '../shared/errors/index.js';
import { UserRole } from '../models/roles.js';
import { resolveUserRole } from '../utils/resolveUserRole.js';
import { user_status } from '../generated/prisma/index.js';

/**
 * AuthService handles user authentication, registration, and token management
 * - registerUser: Creates a new user, hashes their password, assigns default role, and returns tokens
 * - loginUser: Authenticates user credentials, checks for suspension, resolves active role, and returns tokens
 * - refreshTokens: Validates refresh token and issues new access & refresh tokens
 */
class AuthService {
  async registerUser(userData) {
    const { email, password, firstName, lastName, phoneNumber } = userData;

    // Check if user already exists
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ConflictError('Email already registered');
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Get default role
    const defaultRole = await prisma.roles.findUnique({
      where: { name: UserRole.USER },
    });

    if (!defaultRole) {
      throw new AppError(
        'Default role not found. Run role seeder before registering users.',
        500,
        false
      );
    }

    // Create user + assign role (transaction for safety)
    const newUser = await prisma.$transaction(async (tx) => {
      const createdUser = await tx.users.create({
        data: {
          first_name: firstName,
          last_name: lastName,
          email,
          password_hash: passwordHash,
          phone_number: phoneNumber,
        },
        omit: {
          password_hash: true,
        },
      });

      await tx.user_roles.create({
        data: {
          user_id: createdUser.id,
          role_id: defaultRole.id,
        },
      });

      return createdUser;
    });

    const tokens = jwt.create({
      userId: newUser.id,
      activeRole: UserRole.USER,
    });

    // Return sanitized response
    return {
      user: {
        ...newUser,
        activeRole: UserRole.USER,
      },
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  async loginUser(email, password) {
    // Find user by email and include active roles
    const user = await prisma.users.findUnique({
      where: { email },
      include: {
        user_roles_user_roles_user_idTousers: {
          where: { revoked_at: null },
          include: { roles: true },
        },
      },
    });

    // If user does not exist → invalid credentials
    if (!user) {
      throw new UnauthorizedError('Invalid credentials');
    }

    const isValidPassword = await bcrypt.compare(password, user.password_hash);

    // If user password is invalid → invalid credentials
    if (!isValidPassword) {
      throw new UnauthorizedError('Invalid credentials');
    }

    //  If user is suspended due to malicious activity → account suspended
    if (user.is_suspended) {
      throw new ForbiddenError('Account suspended');
    }

    // Deactivated users should not be able to log in
    if (user.status != user_status.active) {
      throw new ForbiddenError('Account deactivated');
    }

    const roleNames = user.user_roles_user_roles_user_idTousers.map(
      (ur) => ur.roles.name
    );
    const activeRole = resolveUserRole(roleNames);

    const tokens = jwt.create({
      userId: user.id,
      activeRole: activeRole,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
        created_at: user.created_at,
        activeRole: activeRole,
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
    } catch {
      throw new UnauthorizedError('Invalid refresh token');
    }
  }
}

export default new AuthService();
