import swaggerJsdoc from 'swagger-jsdoc';

/**
 * Swagger configuration for API documentation
 * Available at /api/doc
 */
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Property Rental Management System API',
      description:
        'A scalable backend application for managing property rentals with multi-role access control (Admin, User, Property Manager), secure authentication, and structured payment tracking.',
      version: '1.0.0',
      contact: {
        name: 'TS Academy group 9 team submission',
        url: 'https://github.com/One-Marvellous/Property-Rental-Management-System',
      },
      license: {
        name: 'ISC',
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: 'Development Server',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT Bearer token for API authentication',
        },
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false,
            },
            message: {
              type: 'string',
              example: 'Error message',
            },
            statusCode: {
              type: 'integer',
              example: 400,
            },
          },
        },
        User: {
          type: 'object',
          properties: {
            userId: {
              type: 'string',
              example: 'user_123abc',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'user@example.com',
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
              nullable: true,
              example: '+1234567890',
            },
          },
        },
        AuthResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true,
            },
            message: {
              type: 'string',
              example: 'Login successful',
            },
            data: {
              type: 'object',
              nullable: true,
              properties: {
                accessToken: {
                  type: 'string',
                  description: 'JWT access token',
                },
                refreshToken: {
                  type: 'string',
                  description: 'JWT refresh token',
                },
                user: {
                  $ref: '#/components/schemas/User',
                },
              },
            },
          },
        },
        AuthRefreshResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true,
            },
            message: {
              type: 'string',
              example: 'Login successful',
            },
            data: {
              type: 'object',
              properties: {
                accessToken: {
                  type: 'string',
                  description: 'JWT access token',
                },
                refreshToken: {
                  type: 'string',
                  description: 'JWT refresh token',
                },
              },
            },
          },
        },
        Category: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: 'cat_123abc',
            },
            name: {
              type: 'string',
              example: 'Apartment',
            },
            description: {
              type: 'string',
              example: 'Modern apartment listings',
            },
          },
        },
        ManagerApplication: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: 'app_123abc',
            },
            userId: {
              type: 'string',
              example: 'user_123abc',
            },
            reason: {
              type: 'string',
              example:
                'I have experience managing rental properties and want to help landlords and tenants connect.',
            },
            status: {
              type: 'string',
              enum: ['pending', 'approved', 'rejected', 'Cancelled'],
              example: 'pending',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        Property: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: 'prop_123abc',
            },
            manager_id: {
              type: 'string',
              example: 'user_123abc',
            },
            title: {
              type: 'string',
              example: 'Cozy Apartment in Downtown',
            },
            description: {
              type: 'string',
              example:
                'A cozy 2-bedroom apartment located in the heart of downtown, close to amenities and public transportation.',
            },
            location: {
              type: 'string',
              example: 'Downtown District',
            },
            approval_status: {
              type: 'string',
              enum: ['pending', 'approved', 'rejected', 'suspended'],
              example: 'pending',
            },
            created_at: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        PaginatedResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true,
            },
            message: {
              type: 'string',
              example: 'Data retrieved successfully',
            },
            data: {
              type: 'array',
              items: {},
            },
            pagination: {
              type: 'object',
              properties: {
                total: {
                  type: 'integer',
                  example: 100,
                },
                page: {
                  type: 'integer',
                  example: 1,
                },
                limit: {
                  type: 'integer',
                  example: 10,
                },
                totalPages: {
                  type: 'integer',
                  example: 10,
                },
                hasNextPage: {
                  type: 'boolean',
                  example: true,
                },
                hasPrevPage: {
                  type: 'boolean',
                  example: false,
                },
              },
            },
          },
        },
      },
    },
    tags: [
      {
        name: 'Authentication',
        description: 'User authentication and authorization endpoints',
      },
      {
        name: 'Admin',
        description: 'Admin management endpoints (Admin role required)',
      },
      {
        name: 'Property Manager',
        description: 'Property manager endpoints (Manager role required)',
      },
      {
        name: 'User',
        description: 'User-related endpoints',
      },
      {
        name: 'Health',
        description: 'System health check',
      },
    ],
  },
  apis: ['./docs/*.swagger.js'],
};

export const specs = swaggerJsdoc(swaggerOptions);
