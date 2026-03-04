import { AppError } from './AppError.js';

/**
 * Unauthorized Error (401)
 * Thrown when authentication is required but missing or invalid.
 */

export class UnauthorizedError extends AppError {
  constructor(message = 'Authentication required') {
    super(message, 401, true);
  }
}
