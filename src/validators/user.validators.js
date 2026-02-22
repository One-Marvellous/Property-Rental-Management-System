import { z } from 'zod';
import { UserRole } from '../models/roles.js';
import { booking_status } from '../generated/prisma/index.js';
import { PaymentMode } from '../models/paymentMode.js';

/**
 * Switch User Role Validator Schema
 * Validates role switching request
 */
export const switchUserRoleValidator = z.object({
  body: z.object({
    newRole: z.enum(Object.values(UserRole)),
  }),
  query: z.object({}).strict().optional(),
  params: z.object({}).strict().optional(),
});

/**
 * Create Booking Validator Schema
 * Validates booking creation request
 */
export const createBookingValidator = z.object({
  body: z.object({
    propertyId: z.uuid('Invalid ID format'),
    duration: z
      .union([z.number(), z.string()])
      .pipe(z.coerce.number().positive('Duration must be a positive number'))
      .default(1),
  }),
  query: z.object({}).strict().optional(),
  params: z.object({}).strict().optional(),
});

/**
 * Get User Bookings Validator Schema
 * Validates pagination and filter parameters for user bookings
 */
export const getUserBookingsValidator = z.object({
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
      status: z.enum(Object.values(booking_status)).optional(),
    })
    .strict()
    .optional(),
  params: z.object({}).strict().optional(),
});

/**
 * ID Parameter Validator Schema
 * Validates single ID path parameter
 */
export const idParamValidator = z.object({
  body: z.object({}).strict().optional(),
  query: z.object({}).strict().optional(),
  params: z.object({
    id: z.uuid('Invalid ID format'),
  }),
});

/**
 * Cancel Booking Validator Schema
 * Validates cancellation request with reason and booking ID
 */
export const cancelBookingValidator = z.object({
  body: z.object({
    reason: z
      .string({
        required_error: 'Cancellation reason is required',
        invalid_type_error: 'Reason must be a string',
      })
      .min(5, 'Reason must be at least 5 characters')
      .max(500, 'Reason must not exceed 500 characters'),
  }),
  query: z.object({}).strict().optional(),
  params: z.object({
    id: z.uuid('Invalid ID format'),
  }),
});

/**
 * Apply For Manager Validator Schema
 * Validates manager application submission
 */
export const applyForManagerValidator = z.object({
  body: z.object({
    reason: z
      .string({
        required_error: 'Application reason is required',
        invalid_type_error: 'Reason must be a string',
      })
      .min(10, 'Reason must be at least 10 characters')
      .max(1000, 'Reason must not exceed 1000 characters'),
  }),
  query: z.object({}).strict().optional(),
  params: z.object({}).strict().optional(),
});

/**
 * Create invoice Schema
 * Validates request for invoice creation
 */
export const createInvoiceValidator = z.object({
  body: z
    .object({
      paymentMode: z.enum(Object.values(PaymentMode)),
    })
    .strict()
    .optional(),
  query: z.object({}).strict().optional(),
  params: z.object({
    id: z.uuid('Invalid ID format'),
  }),
});

/**
 * Session ID Parameter Validator Schema
 * Validates single ID path parameter
 */
export const sessionIdParamValidator = z.object({
  body: z.object({}).strict().optional(),
  query: z.object({}).strict().optional(),
  params: z.object({
    session_id: z.uuid('Invalid ID format'),
  }),
});
