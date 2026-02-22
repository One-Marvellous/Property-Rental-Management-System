import {
  pricing_unit,
  property_approval_status,
  manager_application_status,
  booking_status,
  property_availability_status,
} from '../generated/prisma/index.js';
import adminDoc from '../../docs/admin.swagger.js';
import authDoc from '../../docs/auth.swagger.js';
import healthDoc from '../../docs/health.swagger.js';
import propertyDoc from '../../docs/property.swagger.js';
import userDoc from '../../docs/user.swagger.js';
import managerDoc from '../../docs/propertyManager.swagger.js';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Property Rental Management System API',
      description:
        'Scalable backend for managing property rentals with role-based access, authentication, and booking workflows.',
      version: '1.0.0',
      contact: {
        name: 'TS Academy Group 9',
        url: 'https://github.com/One-Marvellous/Property-Rental-Management-System',
      },
      license: { name: 'ISC' },
    },

    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: 'Development server',
      },
    ],

    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },

      schemas: {
        /** ---------------- BASE RESPONSES ---------------- */
        ApiResponse: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: true },
            message: { type: 'string', example: 'Request successful' },
            data: { nullable: true },
          },
        },

        ErrorResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: {
                success: { example: false },
                message: { example: 'An error occurred' },
              },
            },
          ],
        },

        /** ---------------- CORE ENTITIES ---------------- */
        User: {
          type: 'object',
          properties: {
            id: { type: 'string', example: 'user_123abc' },
            email: { type: 'string', format: 'email' },
            first_name: { type: 'string' },
            last_name: { type: 'string' },
            phone_number: { type: 'string', nullable: true },
            created_at: { type: 'string', format: 'date-time' },
          },
        },

        Category: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            description: { type: 'string' },
          },
        },

        Property: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            title: { type: 'string' },
            description: { type: 'string' },
            address: { type: 'string' },
            city: { type: 'string' },
            state: { type: 'string' },
            pricing_unit: { type: 'string', enum: Object.values(pricing_unit) },
            base_price: { type: 'number', format: 'float' },
            approval_status: {
              type: 'string',
              enum: Object.values(property_approval_status),
            },
            availability_status: {
              type: 'string',
              enum: Object.values(property_availability_status),
            },
            category_id: { type: 'string' },
            manager_id: { type: 'string' },
            approved_by: { type: 'string', nullable: true },
            approved_at: {
              type: 'string',
              format: 'date-time',
              nullable: true,
            },
            rejection_reason: { type: 'string', nullable: true },
            created_at: { type: 'string', format: 'date-time' },
          },
        },

        Booking: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            status: { type: 'string', enum: Object.values(booking_status) },
            user_id: { type: 'string' },
            property_id: { type: 'string' },
            start_date: { type: 'string', format: 'date-time' },
            end_date: { type: 'string', format: 'date-time' },
            proposed_amount: { type: 'number', format: 'float' },
            cancellation_reason: { type: 'string', nullable: true },
            cancelled_at: {
              type: 'string',
              format: 'date-time',
              nullable: true,
            },
            created_at: { type: 'string', format: 'date-time' },
          },
        },

        ManagerApplication: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            userId: { type: 'string' },
            reason: { type: 'string' },
            status: {
              type: 'string',
              enum: Object.values(manager_application_status),
            },
            reviewed_by: { type: 'string', nullable: true },
            reviewed_at: {
              type: 'string',
              format: 'date-time',
              nullable: true,
            },
            created_at: { type: 'string', format: 'date-time' },
          },
        },

        Invoice: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            rental_id: { type: 'string' },
            total_amount: { type: 'number' },
            status: { type: 'string' },
            stripe_checkout_session_id: { type: 'string' },
            stripe_payment_intent_id: { type: 'string' },
          },
        },
        PaymentSchedule: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            due_date: { type: 'string', format: 'date-time' },
            amount: { type: 'number' },
            status: { type: 'string' },
          },
        },

        /** ---------------- AUTH ---------------- */
        AuthData: {
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            refreshToken: { type: 'string' },
            user: {
              allOf: [
                { $ref: '#/components/schemas/User' },
                {
                  type: 'object',
                  properties: { activeRole: { type: 'string' } },
                },
              ],
            },
          },
        },

        AuthRefreshData: {
          type: 'object',
          properties: {
            accessToken: { type: 'string' },
            refreshToken: { type: 'string' },
          },
        },

        AuthRefreshResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: {
                data: { $ref: '#/components/schemas/AuthRefreshData' },
              },
            },
          ],
        },

        AuthResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: { data: { $ref: '#/components/schemas/AuthData' } },
            },
          ],
        },

        /** ---------------- GENERIC SINGLE RESOURCE ---------------- */
        SingleManagerApplicationResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: {
                data: { $ref: '#/components/schemas/ManagerApplication' },
              },
            },
          ],
        },

        BookingDetailResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  properties: {
                    booking: { $ref: '#/components/schemas/Booking' },
                    property: { $ref: '#/components/schemas/Property' },
                  },
                },
              },
            },
          ],
        },

        ManagerBookingDetailResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  properties: {
                    id: { type: 'string' },
                    status: {
                      type: 'string',
                      enum: Object.values(booking_status),
                    },
                    user_id: { type: 'string' },
                    property_id: { type: 'string' },
                    start_date: { type: 'string', format: 'date-time' },
                    end_date: { type: 'string', format: 'date-time' },
                    proposed_amount: { type: 'number', format: 'float' },
                    cancellation_reason: { type: 'string', nullable: true },
                    cancelled_at: {
                      type: 'string',
                      format: 'date-time',
                      nullable: true,
                    },
                    created_at: { type: 'string', format: 'date-time' },
                    user: { $ref: '#/components/schemas/User' },
                    property: { $ref: '#/components/schemas/Property' },
                  },
                },
              },
            },
          ],
        },

        PropertyDetailResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  properties: {
                    manager: { $ref: '#/components/schemas/User' },
                    property: { $ref: '#/components/schemas/Property' },
                  },
                },
              },
            },
          ],
        },

        ManagerApplicationDetailResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  properties: {
                    application: {
                      $ref: '#/components/schemas/ManagerApplication',
                    },
                    applicant: { $ref: '#/components/schemas/User' },
                  },
                },
              },
            },
          ],
        },

        ManagerApplicationStatusResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: {
                data: {
                  type: 'object',
                  properties: {
                    status: {
                      type: 'string',
                      enum: Object.values(manager_application_status),
                      example: manager_application_status.approved,
                    },
                  },
                },
              },
            },
          ],
        },

        CategoryResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: {
                data: {
                  $ref: '#/components/schemas/Category',
                },
              },
            },
          ],
        },

        BookingResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: {
                data: {
                  $ref: '#/components/schemas/Booking',
                },
              },
            },
          ],
        },

        Rental: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            user_id: { type: 'string' },
            property_id: { type: 'string' },
            status: { type: 'string' },
            lease_start: { type: 'string', format: 'date-time' },
            lease_end: { type: 'string', format: 'date-time' },
            pricing_unit: { type: 'string' },
            agreed_price: { type: 'number' },
            payment_schedules: {
              type: 'array',
              items: { $ref: '#/components/schemas/PaymentSchedule' },
            },
            invoices: {
              type: 'array',
              items: { $ref: '#/components/schemas/Invoice' },
            },
          },
        },

        /** ---------------- PAGINATION ---------------- */
        PaginationMeta: {
          type: 'object',
          properties: {
            total: { type: 'integer', example: 100 },
            page: { type: 'integer', example: 1 },
            limit: { type: 'integer', example: 15 },
            totalPages: { type: 'integer', example: 10 },
            hasNextPage: { type: 'boolean', example: true },
            hasPrevPage: { type: 'boolean', example: false },
          },
        },

        PaginatedResponse: {
          allOf: [
            { $ref: '#/components/schemas/ApiResponse' },
            {
              type: 'object',
              properties: {
                data: { type: 'array', items: {} },
                pagination: { $ref: '#/components/schemas/PaginationMeta' },
              },
            },
          ],
        },

        PaginatedBookings: {
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

        PaginatedProperty: {
          allOf: [
            { $ref: '#/components/schemas/PaginatedResponse' },
            {
              type: 'object',
              properties: {
                data: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Property' },
                },
              },
            },
          ],
        },

        PaginatedUsers: {
          allOf: [
            { $ref: '#/components/schemas/PaginatedResponse' },
            {
              type: 'object',
              properties: {
                data: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/User' },
                },
              },
            },
          ],
        },

        PaginatedManagerApplicationResponse: {
          allOf: [
            { $ref: '#/components/schemas/PaginatedResponse' },
            {
              type: 'object',
              properties: {
                data: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/ManagerApplication' },
                },
              },
            },
          ],
        },
      },
    },

    tags: [
      { name: 'Authentication', description: 'Auth endpoints' },
      { name: 'Admin', description: 'Admin operations' },
      { name: 'Property Manager', description: 'Manager operations' },
      { name: 'User', description: 'User operations' },
      { name: 'Property', description: 'Property endpoints' },
      { name: 'Health', description: 'Health check' },
    ],
  },
  // paths will be merged from dedicated docs modules below
};

// Merge paths from individual doc modules into the final OpenAPI spec
const mergedPaths = {
  ...(adminDoc && adminDoc.paths ? adminDoc.paths : {}),
  ...(authDoc && authDoc.paths ? authDoc.paths : {}),
  ...(healthDoc && healthDoc.paths ? healthDoc.paths : {}),
  ...(propertyDoc && propertyDoc.paths ? propertyDoc.paths : {}),
  ...(userDoc && userDoc.paths ? userDoc.paths : {}),
  ...(managerDoc && managerDoc.paths ? managerDoc.paths : {}),
};

export const specs = {
  ...swaggerOptions.definition,
  paths: mergedPaths,
};
