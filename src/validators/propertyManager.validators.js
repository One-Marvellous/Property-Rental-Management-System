import { z } from 'zod';
import { property_approval_status } from '../generated/prisma/index.js';

// reused simple id schema for routes with only an :id parameter
const idParamSchema = z.object({
  body: z.object({}).strict().optional(),
  query: z.object({}).strict().optional(),
  params: z.object({
    id: z.uuid('Invalid ID format'),
  }),
});

/**
 * Validator for creating a new property draft
 */
export const addPropertyValidator = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string',
      })
      .min(1, 'Title cannot be empty'),
    description: z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string',
      })
      .min(1, 'Description cannot be empty'),
    address: z
      .string({
        required_error: 'Address is required',
        invalid_type_error: 'Address must be a string',
      })
      .min(1, 'Address cannot be empty'),
    city: z
      .string({
        required_error: 'City is required',
        invalid_type_error: 'City must be a string',
      })
      .min(1, 'City cannot be empty'),
    state: z
      .string({
        required_error: 'State is required',
        invalid_type_error: 'State must be a string',
      })
      .min(1, 'State cannot be empty'),
    pricingUnit: z
      .string({
        required_error: 'Pricing unit is required',
        invalid_type_error: 'Pricing unit must be a string',
      })
      .min(1, 'Pricing unit cannot be empty'),
    basePrice: z
      .union([z.number(), z.string()])
      .pipe(z.coerce.number().positive('Base price must be a positive number')),
    categoryId: z.uuid('Invalid category ID format'),
  }),
  query: z.object({}).strict().optional(),
  params: z.object({}).strict().optional(),
});

/**
 * Validator for publishing, deleting or managing a property by id
 * (no request body required)
 */
export const publishPropertyValidator = idParamSchema;
export const removePropertyValidator = idParamSchema;
export const approveBookingValidator = idParamSchema;
export const rejectBookingValidator = idParamSchema;

/**
 * Validator for editing a property. All fields are optional since a
 * partial update is expected.
 */
export const editPropertyValidator = z.object({
  body: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    pricingUnit: z.string().optional(),
    basePrice: z
      .union([z.number(), z.string()])
      .pipe(z.coerce.number().positive('Base price must be a positive number'))
      .optional(),
    categoryId: z.uuid('Invalid category ID format').optional(),
  }),
  query: z.object({}).strict().optional(),
  params: z.object({
    id: z.uuid('Invalid ID format'),
  }),
});

/**
 * Validator for listing a manager's own properties with filters/pagination
 */
export const getUserPropertyValidator = z.object({
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
      status: z.enum(Object.values(property_approval_status)).optional(),
    })
    .strict()
    .optional(),
  params: z.object({}).strict().optional(),
});
