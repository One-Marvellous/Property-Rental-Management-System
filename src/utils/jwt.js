/**
 * JWT Token Management Utility
 * Handles generation and validation of JSON Web Tokens for authentication
 */
import jwt from 'jsonwebtoken';
import { ENV } from '../config/env';

/**
 * Generates both access and refresh tokens for authenticated users
 * @param {string} userId - Unique identifier of the user
 * @param {string} activeRole - Current active role of the user (e.g., 'admin', 'user', 'propertyManager')
 * @returns {Object} Object containing accessToken and refreshToken
 * @returns {string} accessToken - Short-lived token for API authentication
 * @returns {string} refreshToken - Long-lived token for obtaining new access tokens
 */
export const generateTokens = (userId, activeRole) => {
  // Payload to be encoded in both tokens
  const payload = {
    userId,
    activeRole,
  };

  // Generate access token with configured secret and expiration
  const accessToken = jwt.sign(payload, ENV.JWT_SECRET, {
    expiresIn: ENV.JWT_EXPIRES_IN,
  });

  // Generate refresh token with separate secret and longer expiration
  const refreshToken = jwt.sign(payload, ENV.JWT_REFRESH_SECRET, {
    expiresIn: ENV.JWT_REFRESH_EXPIRES_IN,
  });

  return { accessToken, refreshToken };
};
