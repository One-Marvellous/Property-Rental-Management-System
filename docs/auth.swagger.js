export default {
  paths: {
    '/api/v1/auth/register': {
      post: {
        summary: 'Create an account',
        description:
          'Sign up with your email, name, and phone number. Returns access and refresh tokens on success.',
        tags: ['Authentication'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: [
                  'email',
                  'password',
                  'firstName',
                  'lastName',
                  'phoneNumber',
                ],
                properties: {
                  email: {
                    type: 'string',
                    format: 'email',
                    example: 'user@example.com',
                  },
                  password: {
                    type: 'string',
                    format: 'password',
                    minLength: 8,
                    example: 'SecurePass123!',
                  },
                  firstName: {
                    type: 'string',
                    example: 'John',
                  },
                  lastName: {
                    type: 'string',
                    example: 'Doe',
                  },
                  phoneNumber: {
                    type: 'string',
                    example: '+1234567890',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Account created.',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/AuthResponse' },
                    {
                      type: 'object',
                      properties: {
                        message: {
                          example: 'User registered successfully',
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          409: {
            description: 'Email already registered',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          500: {
            description: 'Default role not found or Registration failed',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/auth/login': {
      post: {
        summary: 'Log in',
        description:
          'Sign in with email and password. Returns fresh access and refresh tokens.',
        tags: ['Authentication'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                  email: {
                    type: 'string',
                    format: 'email',
                    example: 'user@example.com',
                  },
                  password: {
                    type: 'string',
                    format: 'password',
                    example: 'SecurePass123!',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Login successful.',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/AuthResponse' },
                    {
                      type: 'object',
                      properties: {
                        message: {
                          example: 'Login successful',
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          401: {
            description: 'Wrong email or password.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          403: {
            description: 'Account is suspended.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/auth/refresh': {
      post: {
        summary: 'Refresh tokens',
        description: 'Exchange a valid refresh token for a new access token.',
        tags: ['Authentication'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['refreshToken'],
                properties: {
                  refreshToken: {
                    type: 'string',
                    description: 'JWT refresh token',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'New tokens issued.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/AuthRefreshResponse' },
              },
            },
          },
          401: {
            description: 'Refresh token is invalid or expired.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },
  },
};
