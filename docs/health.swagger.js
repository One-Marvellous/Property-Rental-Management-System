export default {
  paths: {
    '/api/v1/health': {
      get: {
        summary: 'Server health',
        description: 'Confirms the server is up. No auth needed.',
        tags: ['Health'],
        responses: {
          200: {
            description: 'Server is up and responding.',
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
