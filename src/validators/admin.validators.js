import { z } from 'zod';

/**
 * Get Users Validator Schema
 * Validates query parameters for fetching users with pagination and filters
 */
export const getUsersValidator = z.object({
  body: z.object({}).strict().optional(),
  query: z
    .object({
      page: z
        .string({
          invalid_type_error: 'Page must be a string',
        })
        .optional()
        .transform((val) => (val ? parseInt(val, 10) : undefined)),
      limit: z
        .string({
          invalid_type_error: 'Limit must be a string',
        })
        .optional()
        .transform((val) => (val ? parseInt(val, 10) : undefined)),
      from: z.iso.datetime('Invalid date format').optional(),
      to: z.iso.datetime('Invalid date format').optional(),
      order: z.enum(['asc', 'desc']).optional(),
    })
    .strict()
    .optional(),
  params: z.object({}).strict().optional(),
});

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

/**
 * Get Manager Applications Validator Schema
 * Validates query parameters for fetching manager applications with pagination and filters
 */
export const getManagerApplicationsValidator = z.object({
  body: z.object({}).strict().optional(),
  query: z
    .object({
      page: z
        .string({
          invalid_type_error: 'Page must be a string',
        })
        .optional()
        .transform((val) => (val ? parseInt(val, 10) : undefined)),
      limit: z
        .string({
          invalid_type_error: 'Limit must be a string',
        })
        .optional()
        .transform((val) => (val ? parseInt(val, 10) : undefined)),
      status: z
        .string({
          invalid_type_error: 'Status must be a string',
        })
        .optional(),
      order: z.enum(['asc', 'desc']).optional(),
      from: z.iso.datetime('Invalid date format').optional(),
      to: z.iso.datetime('Invalid date format').optional(),
    })
    .strict()
    .optional(),
  params: z.object({}).strict().optional(),
});

/**
 * Get Property Submissions Validator Schema
 * Validates query parameters for fetching property submissions with pagination
 */
export const getPropertySubmissionsValidator = z.object({
  body: z.object({}).strict().optional(),
  query: z
    .object({
      page: z
        .string({
          invalid_type_error: 'Page must be a string',
        })
        .optional()
        .transform((val) => (val ? parseInt(val, 10) : undefined)),
      limit: z
        .string({
          invalid_type_error: 'Limit must be a string',
        })
        .optional()
        .transform((val) => (val ? parseInt(val, 10) : undefined)),
      order: z.enum(['asc', 'desc']).optional(),
      from: z.iso.datetime('Invalid date format').optional(),
      to: z.iso.datetime('Invalid date format').optional(),
    })
    .strict()
    .optional(),
  params: z.object({}).strict().optional(),
});

/**
 * Reject Property Submission Validator Schema
 * Validates property rejection request with rejection reason
 */
export const rejectPropertySubmissionValidator = z.object({
  body: z.object({
    rejectionReason: z
      .string({
        required_error: 'Rejection reason is required',
        invalid_type_error: 'Rejection reason must be a string',
      })
      .min(10, 'Rejection reason must be at least 10 characters')
      .max(500, 'Rejection reason must not exceed 500 characters'),
  }),
  query: z.object({}).strict().optional(),
  params: z.object({
    id: z.uuid('Invalid ID format'),
  }),
});
