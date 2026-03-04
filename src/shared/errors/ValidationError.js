import { AppError } from './AppError.js';

/**
 * Validation Error (400)
 * Thrown when request input validation fails; carries field-level details.
 */

export class ValidationError extends AppError {
  constructor(message = 'Validation failed', details) {
    super(message, 400, true, details);
  }
}

export const createValidationError = (fields) =>
  new ValidationError('Validation failed', { fields });
