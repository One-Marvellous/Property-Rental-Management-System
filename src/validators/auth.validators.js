import { z } from 'zod';

/**
 * Login Validator Schema
 * Validates email and password for user login
 */
export const loginValidator = z.object({
  body: z.object({
    email: z.email('Invalid email'),
    password: z
      .string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string',
      })
      .min(6, 'Password must be at least 6 characters')
      .max(255, 'Password must not exceed 255 characters'),
  }),
  query: z.object({}).strict().optional(),
  params: z.object({}).strict().optional(),
});

/**
 * Signup Validator Schema
 * Validates email, password, first name, last name, and phone number for user registration
 */
export const signupValidator = z.object({
  body: z.object({
    email: z.email('Invalid email'),
    password: z
      .string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string',
      })
      .min(8, 'Password must be at least 8 characters')
      .max(255, 'Password must not exceed 255 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
    firstName: z
      .string({
        required_error: 'First name is required',
        invalid_type_error: 'First name must be a string',
      })
      .min(2, 'First name must be at least 2 characters')
      .max(50, 'First name must not exceed 50 characters')
      .regex(
        /^[a-zA-Z\s'-]+$/,
        'First name can only contain letters, spaces, hyphens, and apostrophes'
      ),
    lastName: z
      .string({
        required_error: 'Last name is required',
        invalid_type_error: 'Last name must be a string',
      })
      .min(2, 'Last name must be at least 2 characters')
      .max(50, 'Last name must not exceed 50 characters')
      .regex(
        /^[a-zA-Z\s'-]+$/,
        'Last name can only contain letters, spaces, hyphens, and apostrophes'
      ),
    phoneNumber: z
      .string({
        required_error: 'Phone number is required',
        invalid_type_error: 'Phone number must be a string',
      })
      .regex(
        /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
        'Invalid phone number format'
      )
      .min(7, 'Phone number must be at least 7 characters')
      .max(20, 'Phone number must not exceed 20 characters'),
  }),
  query: z.object({}).strict().optional(),
  params: z.object({}).strict().optional(),
});
