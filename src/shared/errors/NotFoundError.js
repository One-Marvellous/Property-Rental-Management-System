import { AppError } from './AppError.js';

/**
 * Not Found Error (404)
 * Thrown when a requested resource cannot be found.
 */
export class NotFoundError extends AppError {
  constructor(resource = 'Resource', id) {
    const message = id
      ? `${resource} with id '${id}' not found`
      : `${resource} not found`;
    super(message, 404, true);
  }
}
