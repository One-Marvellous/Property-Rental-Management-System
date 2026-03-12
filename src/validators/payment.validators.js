import { z } from 'zod';

/**
 * Session ID Parameter Validator Schema
 * Validates single ID path parameter
 */
export const sessionIdParamValidator = z.object({
  body: z.object({}).strict().optional(),
  query: z.object({
    session_id: z.string().min(1, 'session_id is required'),
  }),
  params: z.object({}).optional(),
});

export const paymentIdParamValidator = z.object({
  body: z.object({}).strict().optional(),
  query: z.object({}).optional(),
  params: z.object({
    id: z.string().min(1, 'id is required'),
  }),
});
