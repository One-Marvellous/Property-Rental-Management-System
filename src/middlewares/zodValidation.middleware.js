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

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = (error.issues || []).map((err) => ({
          path: err.path.join('.'),
          message: err.message,
        }));

        next(new ApiError(400, 'Validation Error', 'VALIDATION_ERROR', errors));
      } else {
        next(
          new ApiError(500, 'Internal Server Error', 'UNKNOWN_ERROR', [
            {
              message:
                error?.message ||
                'An unknown error occurred during validation.',
            },
          ])
        );
      }
    }
  };
};
