import { AppError } from '../shared/errors/index.js';
import logger from '../config/logger.js';

/**
 * Global error handler – must be registered after all routes.
 *
 * Operational errors (AppError instances) are returned to the client with
 * their own statusCode and message.  Unexpected/programmer errors are logged
 * in full and a generic 500 is sent to avoid leaking internals.
 */
export const globalErrorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err instanceof AppError) {
    if (!err.isOperational) {
      logger.error('Non-operational AppError', {
        message: err.message,
        stack: err.stack,
        path: req.path,
        method: req.method,
      });
    } else {
      logger.warn('Operational error', {
        statusCode: err.statusCode,
        message: err.message,
        path: req.path,
        method: req.method,
      });
    }

    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(err.details !== undefined && { details: err.details }),
    });
  }

  logger.error('Unhandled error', {
    message: err?.message,
    stack: err?.stack,
    path: req.path,
    method: req.method,
  });

  return res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};

export default globalErrorHandler;
