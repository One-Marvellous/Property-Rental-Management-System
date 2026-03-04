import { AppError } from './AppError.js';

/**
 * Conflict Error (409)
 * Thrown when the request conflicts with the current state of the resource.
 */
export class ConflictError extends AppError {
  constructor(message = 'Resource conflict') {
    super(message, 409, true);
  }
}
