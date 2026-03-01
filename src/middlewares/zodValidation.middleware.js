import { ZodError } from 'zod';
import ApiError from '../utils/apiError.js';

export const zodValidation = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (error) {
      /**
       * Handle Zod validation errors
       */
      if (error instanceof ZodError) {
        const errors = error.issues.map((issue) => ({
          path: issue.path.join('.'),
          message: issue.message,
        }));

        return next(
          new ApiError(400, 'Validation Error', 'VALIDATION_ERROR', errors)
        );
      }

      /**
       * Handle unknown/internal errors
       */
      return next(
        new ApiError(500, 'Internal Server Error', 'UNKNOWN_ERROR', [
          {
            message:
              error?.message || 'An unknown error occurred during validation.',
          },
        ])
      );
    }
  };
};
