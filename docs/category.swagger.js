export default {
  paths: {
    '/api/v1/categories': {
      get: {
        summary: 'Get all categories',
        description: 'Get all categories ever created',
        tags: ['Admin', 'User', 'Property Manager', 'Category'],
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['name', 'description'],
                properties: {
                  name: { type: 'string', example: 'Apartment' },
                  description: {
                    type: 'string',
                    example: 'Modern apartment listings',
                  },
                  displayOrder: {
                    type: 'integer',
                    example: 0,
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Category fetched successfully',
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
                            categories: {
                              type: 'array',
                              items: { $ref: '#/components/schemas/Category' },
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
      post: {
        summary: 'Create a new category',
        description: 'Create a new property category. Admin only.',
        tags: ['Admin', 'Category'],
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['name', 'description'],
                properties: {
                  name: { type: 'string', example: 'Apartment' },
                  description: {
                    type: 'string',
                    example: 'Modern apartment listings',
                  },
                  displayOrder: {
                    type: 'integer',
                    example: 0,
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Category created successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/CategoryResponse' },
              },
            },
          },
          409: {
            description: 'Category with this name already exists',
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

    '/api/v1/categories/{id}': {
      patch: {
        summary: 'Update a category',
        description:
          'Update the description of an existing category. Admin only.',
        tags: ['Admin', 'Category'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Category ID',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['description'],
                properties: {
                  description: {
                    type: 'string',
                    example: 'Updated category description',
                  },
                  displayOrder: {
                    type: 'integer',
                    example: 0,
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Category updated successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/CategoryResponse' },
              },
            },
          },
          404: {
            description: 'Category not found',
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

      delete: {
        summary: 'Delete a category',
        description: 'Delete a property category. Admin only.',
        tags: ['Admin', 'Category'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Category ID',
          },
        ],
        responses: {
          200: {
            description: 'Category deleted successfully',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
              },
            },
          },
          400: {
            description: 'Cannot delete category with attached properties',
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
            description: 'Category not found',
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
