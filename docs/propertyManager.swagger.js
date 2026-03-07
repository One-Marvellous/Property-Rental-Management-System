import {
  booking_status,
  property_approval_status,
} from '../src/generated/prisma/index.js';
import { OrderStatus } from '../src/models/order.js';

export default {
  paths: {
    '/api/v1/manager/properties': {
      post: {
        summary: 'Create a property',
        description:
          'Adds a new property under your account. Starts in draft state until published.',
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
            description: 'Property created.',
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
        summary: 'Submit for approval',
        description:
          'Flags the property as pending so an admin can review and approve it.',
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
            description: 'Property submitted for review.',
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
        summary: 'Update a property',
        description:
          'Apply partial updates to a property you own. Only the fields you send will change.',
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
            description: 'Property updated.',
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
          'Removes a property and all its associated images permanently.',
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
            description: 'Property deleted.',
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

    '/api/v1/manager/properties/{id}/images': {
      post: {
        summary: 'Upload images',
        description:
          'Attach images to a property (max 5 total). Send files as multipart/form-data.',
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
            'multipart/form-data': {
              schema: {
                type: 'object',
                properties: {
                  images: {
                    type: 'array',
                    items: { type: 'string', format: 'binary' },
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Images uploaded.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
              },
            },
          },
          400: {
            description: 'Validation error or no file provided',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ErrorResponse' },
              },
            },
          },
        },
      },
    },

    '/api/v1/manager/properties/{id}/images/{imageId}': {
      delete: {
        summary: 'Delete an image',
        description: 'Removes a specific image from a property.',
        tags: ['Property Manager'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
          {
            in: 'path',
            name: 'imageId',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          200: {
            description: 'Image deleted.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
              },
            },
          },
          404: {
            description: 'Image not found',
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
        summary: 'Your properties',
        description:
          'Lists all properties you manage. Filter by status or date range.',
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
              enum: Object.values(OrderStatus),
              default: OrderStatus.DESC,
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

    '/api/v1/manager/bookings/all': {
      get: {
        summary: 'Bookings on your properties',
        description:
          'Lists bookings across all your properties. Filter by status or date range.',
        tags: ['Property Manager'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'query',
            name: 'page',
            schema: { type: 'integer', example: 1 },
            description: 'Page number (default: 1)',
          },
          {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', example: 15 },
            description: 'Items per page (default: 15)',
          },
          {
            in: 'query',
            name: 'from',
            schema: { type: 'string', format: 'date-time' },
            description: 'Filter bookings created from this date (ISO 8601)',
          },
          {
            in: 'query',
            name: 'to',
            schema: { type: 'string', format: 'date-time' },
            description: 'Filter bookings created until this date (ISO 8601)',
          },
          {
            in: 'query',
            name: 'order',
            schema: {
              type: 'string',
              enum: Object.values(OrderStatus),
              example: OrderStatus.DESC,
            },
            description: 'Sort order by creation date',
          },
          {
            in: 'query',
            name: 'status',
            schema: {
              type: 'string',
              enum: Object.values(booking_status),
            },
            description: 'Filter by booking status',
          },
        ],
        responses: {
          200: {
            description: 'Bookings retrieved successfully',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/PaginatedResponse' },
                    {
                      type: 'object',
                      properties: {
                        data: {
                          type: 'array',
                          items: { $ref: '#/components/schemas/Booking' },
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

    '/api/v1/manager/bookings/{id}': {
      get: {
        summary: 'Get booking details',
        description:
          'Returns full details of a booking on one of your properties, including tenant info.',
        tags: ['Property Manager'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Booking ID',
          },
        ],
        responses: {
          200: {
            description: 'Booking details retrieved successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ManagerBookingDetailResponse',
                },
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
        description: 'Accepts a pending booking and creates a rental record.',
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
            description: 'Booking approved.',
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
        description: 'Declines a pending booking request.',
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
            description: 'Booking rejected.',
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

    '/api/v1/manager/rentals/{id}': {
      get: {
        summary: 'Get rental details',
        description: 'Returns a rental record with its full payment history.',
        tags: ['Property Manager'],
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

    '/api/v1/manager/income': {
      get: {
        summary: 'Your income',
        description:
          'Total income per property from all your successful rentals.',
        tags: ['Property Manager'],
        security: [{ BearerAuth: [] }],
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
                              city: { type: 'string', example: 'Miami' },
                              state: { type: 'string', example: 'FL' },
                              total_manager_earnings: {
                                type: 'number',
                                example: 5000,
                              },
                              total_gross: { type: 'number', example: 10000 },
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
        },
      },
    },
  },
};
