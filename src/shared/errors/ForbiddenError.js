import { AppError } from './AppError.js';

/**
 * Forbidden Error (403)
 * Thrown when the user is authenticated but lacks the required permissions.
 */
export class ForbiddenError extends AppError {
  constructor(message = 'Access forbidden') {
    super(message, 403, true);
  }
}
