import { jwt } from '../config/jwt.js';
import {
  TokenExpiredError,
  InvalidTokenError,
} from '@dax-side/jwt-abstraction';

export const authenticate = jwt.protect();

/**
 * Verify access token and attach user to request
 */
export const authenticateWithCustomErrors = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        error: 'Authorization token required',
      });
    }

    const token = authHeader.split(' ')[1];
    const payload = await jwt.verify(token);

    req.user = payload;
    next();
  } catch (error) {
    // Handle known auth errors
    if (error instanceof TokenExpiredError) {
      return res.status(401).json({
        error: 'Token expired',
        code: 'TOKEN_EXPIRED',
      });
    }

    if (error instanceof InvalidTokenError) {
      return res.status(401).json({
        error: 'Invalid token',
        code: 'INVALID_TOKEN',
      });
    }

    next(error);
  }
};

/**
 * Restrict access to specific roles
 * @param  {...string} allowedRoles
 */
export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        error: 'Authentication required',
      });
    }

    if (!allowedRoles.includes(req.user.activeRole)) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        required: allowedRoles,
        current: req.user.activeRole,
      });
    }

    next();
  };
};
