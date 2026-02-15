export default {
  paths: {
    '/api/v1/user/switch-role': {
      post: {
        summary: 'Switch user role',
        description:
          'Switch between user and property manager roles. User role required.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['newRole'],
                properties: {
                  newRole: {
                    type: 'string',
                    example: 'manager',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Role switched successfully',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/AuthResponse' },
                    {
                      type: 'object',
                      properties: {
                        message: {
                          type: 'string',
                          example: 'Role switched successfully',
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          400: {
            description: 'Invalid role specified',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          403: {
            description: 'User lacks permission or role revoked',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/user/bookings': {
      post: {
        summary: 'Create a booking',
        description:
          'Create a booking for an approved, available property. User role required.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['propertyId', 'duration'],
                properties: {
                  propertyId: { type: 'string', example: 'prop_123abc' },
                  duration: { type: 'integer', example: 3 },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Booking created successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/BookingResponse' },
              },
            },
          },
          400: {
            description: 'Invalid request or property unavailable',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          404: {
            description: 'Property not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },

      get: {
        summary: 'List user bookings (paginated)',
        description:
          "Retrieve authenticated user's bookings with pagination and filters.",
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'query',
            name: 'page',
            schema: { type: 'integer', default: 1 },
          },
          {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', default: 15 },
          },
          {
            in: 'query',
            name: 'from',
            schema: { type: 'string', format: 'date-time' },
          },
          {
            in: 'query',
            name: 'to',
            schema: { type: 'string', format: 'date-time' },
          },
          {
            in: 'query',
            name: 'order',
            schema: { type: 'string', enum: ['asc', 'desc'], default: 'desc' },
          },
          {
            in: 'query',
            name: 'status',
            schema: {
              type: 'string',
              enum: ['pending', 'approved', 'rejected', 'cancelled'],
            },
          },
        ],
        responses: {
          200: {
            description: 'Bookings retrieved successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/PaginatedBookings' },
              },
            },
          },
          401: {
            description: 'Unauthorized',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          404: {
            description: 'No bookings found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/user/bookings/{id}': {
      get: {
        summary: 'Get booking by ID',
        description:
          'Retrieve a specific booking belonging to the authenticated user.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: {
            description: 'Booking retrieved successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/BookingDetailResponse' },
              },
            },
          },
          401: {
            description: 'Unauthorized',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          404: {
            description: 'Booking not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/user/bookings/{id}/cancel': {
      patch: {
        summary: 'Cancel booking',
        description: 'Cancel a pending booking. User role required.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['reason'],
                properties: {
                  reason: {
                    type: 'string',
                    example: 'Booking is no longer needed',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: { description: 'Booking cancelled successfully' },
          404: {
            description: 'Pending booking not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/user/manager-application': {
      post: {
        summary: 'Apply to become a property manager',
        description:
          'Submit an application to be a property manager. User role required.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['reason'],
                properties: {
                  reason: {
                    type: 'string',
                    example: 'I have experience managing rental properties',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Application created successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/SingleManagerApplicationResponse',
                },
              },
            },
          },
          400: {
            description:
              'Pending application exists or user is already a manager',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },

      get: {
        summary: 'Get latest manager application',
        description: "Retrieve the user's latest manager application.",
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'Application retrieved successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/SingleManagerApplicationResponse',
                },
              },
            },
          },
          400: {
            description: 'No pending property manager application found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          404: {
            description: 'Application not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/user/manager-application/cancel': {
      patch: {
        summary: 'Cancel manager application',
        description:
          'Cancel a pending manager application. User role required.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'Application cancelled successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
              },
            },
          },
          404: {
            description: 'Pending application not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/user/manager-application/status': {
      get: {
        summary: 'Get manager application status',
        description:
          "Retrieve only the status of the user's manager application.",
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'Status retrieved successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ManagerApplicationStatusResponse',
                },
              },
            },
          },
          404: {
            description: 'Application not found',
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
