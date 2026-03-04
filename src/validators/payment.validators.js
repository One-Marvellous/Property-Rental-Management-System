import { z } from 'zod';

/**
 * Session ID Parameter Validator Schema
 * Validates single ID path parameter
 */
export const sessionIdParamValidator = z.object({
  body: z.object({}).strict().optional(),
  query: z.object({
    id: z.string().min(1, 'id is required'),
  }),
  params: z.object({}).optional(),
});
