import { ZodError } from 'zod';
import { ValidationError, AppError } from '../shared/errors/index.js';

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
      if (error instanceof ZodError) {
        const fields = error.issues.map((issue) => ({
          field: issue.path.join('.'),
          message: issue.message,
        }));

        return next(new ValidationError('Validation failed', { fields }));
      }

      return next(
        new AppError(
          error?.message || 'An unknown error occurred during validation.',
          500,
          false
        )
      );
    }
  };
};
