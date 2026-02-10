import bcrypt from 'bcrypt';
import { jwt } from '../config/jwt.js';
import { prisma } from '../config/db.js';
import ApiError from '../utils/apiError.js';
import { UserRole } from '../models/roles.js';
import { resolveUserRole } from '../utils/resolveUserRole.js';

class AuthService {
  async registerUser(userData) {
    const { email, password, firstName, lastName, phoneNumber } = userData;

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ApiError(409, 'Email already registered');
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const defaultRole = await prisma.roles.findUnique({
      where: { name: UserRole.USER },
    });

    if (!defaultRole) {
      throw new ApiError(
        500,
        'Default role not found.'
      );
    }

    const newUser = await prisma.$transaction(async (tx) => {
      const createdUser = await tx.users.create({
        data: {
          first_name: firstName,
          last_name: lastName,
          email,
          password_hash: passwordHash,
          phone_number: phoneNumber,
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

    return {
      user: {
        userId: newUser.id,
        email: newUser.email,
        firstName: newUser.first_name,
        lastName: newUser.last_name,
        phoneNumber: newUser.phone_number,
        activeRole: UserRole.USER,
        createdAt: newUser.created_at,
      },
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  async loginUser(email, password) {
    const user = await prisma.users.findUnique({
      where: { email },
      include: {
        user_roles: {
          where: { revoked_at: null },
          include: { roles: true },
        },
      },
    });

    if (!user) {
      throw new ApiError(401, 'Invalid credentials');
    }

    if (user.is_suspended) {
      throw new ApiError(403, 'Account suspended');
    }

    const isValidPassword = await bcrypt.compare(password, user.password_hash);

    if (!isValidPassword) {
      throw new ApiError(401, 'Invalid credentials');
    }

    const roleNames = user.user_roles.map((ur) => ur.roles.name);
    const activeRole = resolveUserRole(roleNames);

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
      throw new ApiError(401, 'Invalid refresh token', { cause: error });
    }
  }
}

export default new AuthService();
