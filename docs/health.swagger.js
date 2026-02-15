export default {
  paths: {
    '/api/v1/health': {
      get: {
        summary: 'Health check',
        description: 'Check if the API server is running and responsive',
        tags: ['Health'],
        responses: {
          200: {
            description: 'Server is healthy and running',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    {
                      $ref: '#/components/schemas/ApiResponse',
                    },
                    {
                      type: 'object',
                      properties: {
                        message: {
                          example: 'API is up and running',
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
