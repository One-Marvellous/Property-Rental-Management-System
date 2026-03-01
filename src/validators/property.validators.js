import { z } from 'zod';

/**
 * Get Properties Validator Schema
 * Validates query parameters for browsing properties with pagination and filters
 */
export const getPropertiesValidator = z.object({
  body: z.object({}).strict().optional(),
  query: z
    .object({
      city: z
        .string({
          invalid_type_error: 'City must be a string',
        })
        .optional(),
      state: z
        .string({
          invalid_type_error: 'State must be a string',
        })
        .optional(),
      address: z
        .string({
          invalid_type_error: 'Address must be a string',
        })
        .optional(),
      page: z
        .string({
          invalid_type_error: 'Page must be a string',
        })
        .optional()
        .transform(
          (val) => (val ? parseInt(val, 10) : undefined),
          'Invalid page params'
        ),
      limit: z
        .string({
          invalid_type_error: 'Limit must be a string',
        })
        .optional()
        .transform((val) => (val ? parseInt(val, 10) : undefined)),
      from: z.iso.datetime('Invalid date format').optional(),
      to: z.iso.datetime('Invalid date format').optional(),
    })
    .strict()
    .optional(),
  params: z.object({}).strict().optional(),
});

/**
 * Get Properties By ID Validator Schema
 * Validates path parameter for fetching a single property
 */
export const getPropertiesByIdValidator = z.object({
  body: z.object({}).strict().optional(),
  query: z.object({}).strict().optional(),
  params: z.object({
    id: z.uuid('Invalid property ID format'),
  }),
});
