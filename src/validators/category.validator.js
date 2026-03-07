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
        invalid_type_error: 'Description must be a string',
      })
      .min(10, 'Description must be at least 10 characters')
      .max(500, 'Description must not exceed 500 characters')
      .optional(),
    displayOrder: z
      .union([z.number(), z.string()])
      .pipe(z.coerce.number())
      .optional(),
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
    displayOrder: z
      .union([z.number(), z.string()])
      .pipe(z.coerce.number().positive('Base price must be a positive number'))
      .optional(),
  }),
  query: z.object({}).strict().optional(),
  params: z.object({
    id: z.uuid('Invalid ID format'),
  }),
});
