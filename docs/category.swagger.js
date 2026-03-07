export default {
  paths: {
    '/api/v1/categories': {
      get: {
        summary: 'List categories',
        description: 'Returns all property categories in the system.',
        tags: ['Admin', 'User', 'Property Manager', 'Category'],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: 'Categories list.',
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
        summary: 'Add a category',
        description: 'Creates a new property category. Name must be unique.',
        tags: ['Admin', 'Category'],
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                required: ['name'],
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
            description: 'Category created.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/CategoryResponse' },
              },
            },
          },
          409: {
            description: 'A category with that name already exists.',
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
          'Updates the name, description, or display order of an existing category.',
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
            description: 'Category updated.',
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
        description:
          'Removes a category. Fails if any properties are still assigned to it.',
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
            description: 'Category deleted.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/ApiResponse' },
              },
            },
          },
          400: {
            description: 'Properties are still using this category.',
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
