import { AppError } from './AppError.js';

/**
 * Bad Request Error (400)
 * Thrown when the request is malformed or contains invalid data.
 */
export class BadRequestError extends AppError {
  constructor(message = 'Bad request', details) {
    super(message, 400, true, details);
  }
}
