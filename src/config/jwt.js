/**
 * Centralized JWT conf
 * Uses @dax-side/jwt-abstraction for token management
 */
import { useJwt } from '@dax-side/jwt-abstraction';
import { ENV } from './env.js';

export const jwt = useJwt({
  secret: ENV.JWT_SECRET,
  refreshTokenSecret: ENV.JWT_REFRESH_SECRET,
  accessTokenExpiry: ENV.JWT_EXPIRES_IN || '15m',
  refreshTokenExpiry: ENV.JWT_REFRESH_EXPIRES_IN || '7d',
});
