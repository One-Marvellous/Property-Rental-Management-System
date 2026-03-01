import { z } from 'zod';

/**
 * ID Parameter Validator Schema
 * Validates single ID path parameter for admin operations
 */
export const idParamValidator = z.object({
  body: z.object({}).strict().optional(),
  query: z.object({}).strict().optional(),
  params: z.object({
    id: z.uuid('Invalid ID format'),
  }),
});
