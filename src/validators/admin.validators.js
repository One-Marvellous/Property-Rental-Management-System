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
 * Create Category Validator Schema
 * Validates category creation request
 */
export const createCategoryValidator = z.object({
  body: z.object({
    name: z
      .string({
        required_error: 'Category name is required',
        invalid_type_error: 'Name must be a string',
      })
      .min(2, 'Category name must be at least 2 characters')
      .max(100, 'Category name must not exceed 100 characters'),
    description: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
      })
      .min(10, 'Description must be at least 10 characters')
      .max(500, 'Description must not exceed 500 characters'),
  }),
  query: z.object({}).strict().optional(),
  params: z.object({}).strict().optional(),
});

/**
 * Edit Category Validator Schema
 * Validates category update request
 */
export const editCategoryValidator = z.object({
  body: z.object({
    description: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
      })
      .min(10, 'Description must be at least 10 characters')
      .max(500, 'Description must not exceed 500 characters'),
  }),
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
