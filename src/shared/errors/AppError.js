/**
 * Base Application Error
 * All custom errors extend this class.
 */
export class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true, details) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;

    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
  }

  toJSON() {
    return {
      success: false,
      message: this.message,
      ...(this.details !== undefined && { details: this.details }),
    };
  }
}
