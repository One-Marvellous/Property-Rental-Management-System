/**
 * Shared Error Classes – single source of truth for all application errors.
 */

export { AppError } from './AppError.js';
export { BadRequestError } from './BadRequestError.js';
export { ConflictError } from './ConflictError.js';
export { ForbiddenError } from './ForbiddenError.js';
export { NotFoundError } from './NotFoundError.js';
export { UnauthorizedError } from './UnauthorizedError.js';
export { ValidationError, createValidationError } from './ValidationError.js';
