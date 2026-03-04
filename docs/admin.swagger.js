import { property_approval_status } from '../src/generated/prisma/index.js';
import { OrderStatus } from '../src/models/order.js';

export default {
  paths: {
    '/api/v1/admin/users': {
      get: {
        summary: 'List users',
        description:
          'Paginated list of all registered users. Supports date range filtering.',
        tags: ['Admin'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'query',
            name: 'page',
            schema: { type: 'integer', default: 1 },
            description: 'Page number for pagination',
          },
          {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', default: 15 },
            description: 'Number of items per page',
          },
          {
            in: 'query',
            name: 'from',
            schema: { type: 'string', format: 'date-time' },
            description: 'Start date filter (ISO format)',
          },
          {
            in: 'query',
            name: 'to',
            schema: { type: 'string', format: 'date-time' },
            description: 'End date filter (ISO format)',
          },
        ],
        responses: {
          200: {
            description: 'Users list.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/PaginatedUsers' },
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

    '/api/v1/admin/user/{id}/suspend': {
      patch: {
        summary: 'Suspend a user account',
        description:
          'Disables an active account. The user cannot log in while suspended.',
        tags: ['Admin'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'User ID to suspend',
          },
        ],
        responses: {
          200: {
            description: 'User suspended.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
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
            description: 'User not found.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          409: {
            description: 'Already suspended.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/admin/manager-applications': {
      get: {
        summary: 'List manager applications',
        description:
          'Paginated list of all manager applications. Filter by status, date range, or both.',
        tags: ['Admin'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'query',
            name: 'page',
            schema: { type: 'integer', default: 1 },
            description: 'Page number for pagination',
          },
          {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', default: 15 },
            description: 'Number of items per page',
          },
          {
            in: 'query',
            name: 'status',
            schema: {
              type: 'string',
              example: 'pending',
              enum: Object.values(property_approval_status),
            },
            description: 'Filter by application status',
          },
          {
            in: 'query',
            name: 'from',
            schema: { type: 'string', format: 'date-time' },
            description: 'Start date filter (ISO format)',
          },
          {
            in: 'query',
            name: 'to',
            schema: { type: 'string', format: 'date-time' },
            description: 'End date filter (ISO format)',
          },
        ],
        responses: {
          200: {
            description: 'Applications list.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/PaginatedManagerApplicationResponse',
                },
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

    '/api/v1/admin/manager-applications/{id}': {
      get: {
        summary: 'Get application details',
        description:
          "Returns a single manager application and the applicant's profile.",
        tags: ['Admin'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Manager application ID',
          },
        ],
        responses: {
          200: {
            description: 'Application details.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ManagerApplicationDetailResponse',
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

    '/api/v1/admin/manager-applications/{id}/approve': {
      patch: {
        summary: 'Approve manager application',
        description:
          'Marks the application approved and grants the manager role to the applicant.',
        tags: ['Admin'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Manager application ID',
          },
        ],
        responses: {
          200: {
            description: 'Application approved, role assigned.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
              },
            },
          },
          400: {
            description: 'Application is not in pending status',
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

    '/api/v1/admin/manager-applications/{id}/reject': {
      patch: {
        summary: 'Reject manager application',
        description:
          'Marks the application as rejected. The applicant can reapply later.',
        tags: ['Admin'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Manager application ID',
          },
        ],
        responses: {
          200: {
            description: 'Application rejected.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
              },
            },
          },
          400: {
            description: 'Application is not in pending status',
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

    '/api/v1/admin/property-submissions': {
      get: {
        summary: 'Get property submissions',
        description:
          'Retrieve all manager property submission with pagination, status filtering, and date filtering. Admin only.',
        tags: ['Admin'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'query',
            name: 'page',
            schema: { type: 'integer', default: 1 },
            description: 'Page number for pagination',
          },
          {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', default: 15 },
            description: 'Number of items per page',
          },
          {
            in: 'query',
            name: 'order',
            schema: {
              type: 'string',
              example: 'desc',
              enum: Object.values(OrderStatus),
            },
            description: 'Filter by application status',
          },
          {
            in: 'query',
            name: 'from',
            schema: { type: 'string', format: 'date-time' },
            description: 'Start date filter (ISO format)',
          },
          {
            in: 'query',
            name: 'to',
            schema: { type: 'string', format: 'date-time' },
            description: 'End date filter (ISO format)',
          },
        ],
        responses: {
          responses: {
            200: {
              description: 'Property submissions retrieved successfully',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/PaginatedProperty',
                  },
                },
              },
            },
          },
        },
      },
    },

    '/api/v1/admin/property/{id}/approve': {
      patch: {
        summary: 'Approve a property',
        description: 'Clears a pending property for public listing.',
        tags: ['Admin'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Property ID',
          },
        ],
        responses: {
          200: {
            description: 'Property approved.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
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
          400: {
            description: 'Property is not in pending status',
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
        },
      },
    },

    '/api/v1/admin/property/{id}/reject': {
      patch: {
        summary: 'Reject a property',
        description:
          'Declines a pending property submission. Include a reason in the request body.',
        tags: ['Admin'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Property ID',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/ApiResponse' },
            },
          },
        },
        responses: {
          200: {
            description: 'Property rejected.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean' },
                    message: { type: 'string' },
                  },
                },
              },
            },
          },
          400: {
            description: 'Property is not in pending status',
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
            description: 'Property not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/admin/property/{id}/suspend': {
      patch: {
        summary: 'Suspend a property',
        description: 'Pulls an approved property off the public listing.',
        tags: ['Admin'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Property ID',
          },
        ],
        responses: {
          200: {
            description: 'Property suspended.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
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
          400: {
            description: 'Property is not in approved status',
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
        },
      },
    },

    '/api/v1/admin/income-per-property': {
      get: {
        summary: 'Income by property',
        description:
          'Total income collected from each property across all successful rentals.',
        tags: ['Admin'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Property ID',
          },
        ],
        responses: {
          200: {
            description: 'Income data.',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/ApiResponse' },
                    {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              property_id: {
                                type: 'string',
                                example: 'prop_1234567890',
                              },
                              property_title: {
                                type: 'string',
                                example: 'Luxury Beachfront Villa',
                              },
                              manager_id: {
                                type: 'string',
                                example: 'mgr_1234567890',
                              },
                              total_platform_fee: {
                                type: 'number',
                                example: 5000,
                              },
                            },
                          },
                        },
                      },
                    },
                  ],
                },
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
