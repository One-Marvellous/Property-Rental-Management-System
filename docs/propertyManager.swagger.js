import { property_approval_status } from '../src/generated/prisma/index.js';

export default {
  paths: {
    '/api/v1/manager/properties': {
      post: {
        summary: 'Create property draft',
        description:
          'Create a new property under the authenticated manager. Property will start in draft state.',
        tags: ['Property Manager'],
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: [
                  'title',
                  'description',
                  'address',
                  'city',
                  'state',
                  'pricingUnit',
                  'basePrice',
                  'categoryId',
                ],
                properties: {
                  title: { type: 'string', example: 'Cozy studio' },
                  description: {
                    type: 'string',
                    example: 'Quiet downtown studio',
                  },
                  address: { type: 'string', example: '123 Main St' },
                  city: { type: 'string', example: 'Springfield' },
                  state: { type: 'string', example: 'IL' },
                  pricingUnit: { type: 'string', example: 'night' },
                  basePrice: { type: 'number', example: 100 },
                  categoryId: { type: 'string', example: 'cat_abc123' },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Property draft created successfully',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/ApiResponse' },
                    {
                      type: 'object',
                      properties: {
                        data: {
                          $ref: '#/components/schemas/Property',
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          400: {
            description: 'Validation error or missing fields',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          401: {
            description: 'Unauthorized or not a manager',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/manager/properties/{id}/publish': {
      patch: {
        summary: 'Publish property for approval',
        description:
          'Mark a manager-owned property as pending so that an admin can review it.',
        tags: ['Property Manager'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Property ID to publish',
          },
        ],
        responses: {
          200: {
            description: 'Property submitted for approval',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/ApiResponse' },
                    {
                      type: 'object',
                      properties: {
                        data: {
                          $ref: '#/components/schemas/Property',
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          404: {
            description: 'Property not found or not owned by manager',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/manager/properties/{id}': {
      patch: {
        summary: 'Edit a property',
        description:
          'Apply partial updates to a manager-owned property. Only supplied fields will change.',
        tags: ['Property Manager'],
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
              schema: {
                type: 'object',
                properties: {
                  title: { type: 'string' },
                  description: { type: 'string' },
                  address: { type: 'string' },
                  city: { type: 'string' },
                  state: { type: 'string' },
                  pricingUnit: { type: 'string' },
                  basePrice: { type: 'number' },
                  categoryId: { type: 'string' },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Property updated successfully',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/ApiResponse' },
                    {
                      type: 'object',
                      properties: {
                        data: {
                          $ref: '#/components/schemas/Property',
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
          400: {
            description: 'Validation error',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
          404: {
            description: 'Property not found or not owned by manager',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
      delete: {
        summary: 'Delete a property',
        description:
          'Remove a property that belongs to the authenticated manager.',
        tags: ['Property Manager'],
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
            description: 'Property deleted successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
              },
            },
          },
          404: {
            description: 'Property not found or not owned by manager',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/manager/properties/mine': {
      get: {
        summary: "List manager's own properties",
        description:
          'Retrieve all properties owned by the authenticated manager with optional filters and pagination.',
        tags: ['Property Manager'],
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
            schema: {
              type: 'string',
              enum: ['asc', 'desc'],
              default: 'desc',
            },
          },
          {
            in: 'query',
            name: 'status',
            schema: {
              type: 'string',
              enum: Object.values(property_approval_status),
            },
          },
        ],
        responses: {
          200: {
            description: 'Properties retrieved successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/PaginatedProperty' },
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

    '/api/v1/manager/bookings/{id}/approve': {
      patch: {
        summary: 'Approve a booking',
        description: 'Approve a booking for a property you manage.',
        tags: ['Property Manager'],
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
            description: 'Booking approved successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
              },
            },
          },
          404: {
            description: 'Booking not found or not under your management',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/manager/bookings/{id}/reject': {
      patch: {
        summary: 'Reject a booking',
        description: 'Reject a booking request for a property you manage.',
        tags: ['Property Manager'],
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
            description: 'Booking rejected successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
              },
            },
          },
          404: {
            description: 'Booking not found or not under your management',
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
