import { PaymentMode } from '../src/models/paymentMode.js';

export default {
  paths: {
    '/api/v1/user/switch-role': {
      post: {
        summary: 'Switch active role',
        description:
          'Swap between user and manager roles. Returns fresh tokens reflecting the new role.',
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
            description: 'Role switched. New tokens included.',
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
        summary: 'Book a property',
        description:
          'Creates a booking for an approved, available property. Awaits manager approval.',
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
                  startDate: {
                    type: 'string',
                    format: 'date-time',
                    example: '2024-07-01T14:00:00Z',
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Booking created.',
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
        summary: 'Your bookings',
        description: 'Lists all your bookings. Filter by status or date range.',
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
            description: 'Bookings list.',
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
        summary: 'Get a booking',
        description: 'Returns details for a specific booking you created.',
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
            description: 'Booking details.',
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
        summary: 'Cancel a booking',
        description: 'Cancels a pending booking. You must provide a reason.',
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
        summary: 'Apply to be a manager',
        description:
          'Submits a manager application. Only one pending application is allowed at a time.',
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
            description: 'Application submitted.',
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
        summary: 'Your manager application',
        description: 'Returns your current pending manager application.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'Manager application.',
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
        summary: 'Cancel your application',
        description: 'Withdraws a pending manager application.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'Application withdrawn.',
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
        summary: 'Application status',
        description:
          'Returns just the status field of your latest manager application.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'Application status.',
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

    '/api/v1/user/rentals/{id}': {
      get: {
        summary: 'Get rental details',
        description: 'Returns a rental record with its full payment history.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Rental ID',
          },
        ],
        responses: {
          200: {
            description: 'Rental details',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Rental' },
              },
            },
          },
          404: {
            description: 'Rental not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/user/rentals/{id}/create-invoice': {
      post: {
        summary: 'Create a payment invoice',
        description:
          'Generates an invoice for a rental. Only one pending invoice is allowed per rental.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Rental ID',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  paymentMode: {
                    type: 'string',
                    enum: Object.values(PaymentMode),
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Invoice created',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/ApiResponse' },
                    {
                      type: 'object',
                      properties: {
                        data: { $ref: '#/components/schemas/Invoice' },
                      },
                    },
                  ],
                },
              },
            },
          },
          400: {
            description: 'Invoice already exists or rental terminated',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          404: {
            description: 'Rental not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/user/invoice/{id}/checkout': {
      post: {
        summary: 'Start Stripe checkout',
        description:
          'Creates a Stripe checkout session for a pending invoice. Returns a redirect URL.',
        tags: ['User'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Invoice ID',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['invoiceId'],
                properties: {
                  invoiceId: {
                    type: 'string',
                    description: 'ID of the pending payment/invoice to pay',
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description:
              'Checkout session created. Redirect the user to the returned URL.',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/ApiResponse' },
                    {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'object',
                          properties: {
                            url: { type: 'string' },
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          400: {
            description: 'Bad request (missing invoiceId)',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
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
            description: 'Pending payment/invoice not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/user/history/payments': {
      get: {
        summary: 'Payment history',
        description:
          'Paginated list of your completed payments. Filter by date range.',
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
        ],
        responses: {
          200: {
            description: 'Payment history.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/PaginatedPayments' },
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
        },
      },
    },
  },
};
