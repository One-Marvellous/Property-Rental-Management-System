import bcrypt from 'bcrypt';
import { jwt } from '../config/jwt.js';
import { prisma } from '../config/db.js';
import ApiError from '../utils/apiError.js';
import { UserRole } from '../models/roles.js';
import { resolveUserRole } from '../utils/resolveUserRole.js';

/**
 * AuthService handles user authentication, registration, and token management
 * - registerUser: Creates a new user, hashes their password, assigns default role, and returns tokens
 * - loginUser: Authenticates user credentials, checks for suspension, resolves active role, and returns tokens
 * - refreshTokens: Validates refresh token and issues new access & refresh tokens
 */
class AuthService {
  /**
   * Register a new user and assign default role
   * @param {object} userData - User registration data
   * @param {string} userData.email - User's email address
   * @param {string} userData.password - User's plaintext password
   * @param {string} userData.firstName - User's first name
   * @param {string} userData.lastName - User's last name
   * @param {string} userData.phoneNumber - User's phone number
   * @returns {Promise<object>} Registered user data and JWT tokens
   * @throws {ApiError} Throws ApiError for registration issues (e.g., email already registered)
   */
  async registerUser(userData) {
    const { email, password, firstName, lastName, phoneNumber } = userData;
    /**
     * 1. Check if user already exists
     */
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ApiError(409, 'Email already registered');
    }

    /**
     * 2. Hash password
     */

    const passwordHash = await bcrypt.hash(password, 10);

    /**
     * 3. Get default role ("user")
     */

    const defaultRole = await prisma.roles.findUnique({
      where: { name: UserRole.USER },
    });

    if (!defaultRole) {
      throw new ApiError(
        500,
        'Default role not found. Run role seeder before registering users.'
      );
    }

    /**
     * 4. Create user + assign role (transaction for safety)
     */
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
          is_suspended: true,
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

    /**
     * 5. Return sanitized response
     */
    return {
      user: {
        ...newUser,
        activeRole: UserRole.USER,
      },
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  /**
   * Authenticate user and generate JWT tokens
   * @param {string} email
   * @param {string} password
   * @throws {ApiError} Throws ApiError for invalid credentials or suspended accounts
   * @returns {Promise<object>}
   */
  async loginUser(email, password) {
    /**
     * 1. Find user by email and include active roles
     */
    const user = await prisma.users.findUnique({
      where: { email },
      include: {
        user_roles_user_roles_user_idTousers: {
          where: { revoked_at: null }, // only active roles
          include: { roles: true },
        },
      },
    });

    /**
     * If user does not exist → invalid credentials
     * (Avoid revealing whether email exists for security)
     */
    if (!user) {
      throw new ApiError(401, 'Invalid credentials');
    }

    /**
     * If user is suspended due to malicious activity → account suspended
     */
    if (user.is_suspended) {
      throw new ApiError(403, 'Account suspended');
    }

    /**
     * 2. Verify password hash
     */
    const isValidPassword = await bcrypt.compare(password, user.password_hash);

    if (!isValidPassword) {
      throw new ApiError(401, 'Invalid credentials');
    }

    /**
     * 3. Resolve active role from user's roles
     */
    const roleNames = user.user_roles_user_roles_user_idTousers.map(
      (ur) => ur.roles.name
    );
    const activeRole = resolveUserRole(roleNames);

    /**
     * 4. Generate access & refresh tokens
     */
    const tokens = jwt.create({
      userId: user.id,
      activeRole: activeRole,
    });

    /**
     * 5. Return sanitized user data + tokens
     */

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

  /**
   * Refreshes user Token
   * @param {string} refreshToken
   * @return {Promise<object>} New access and refresh tokens
   * @throws {ApiError} Throws ApiError if refresh token is invalid or expired
   */
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

// Export singleton instance for use throughout the application
export default new AuthService();
