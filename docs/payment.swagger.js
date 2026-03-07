export default {
  paths: {
    '/payment/verify/{id}/': {
      post: {
        summary: 'Verify a payment using stripe session id',
        description: 'Verifies a stripe payment and update the tables',
        tags: ['Payment'],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'Session ID',
          },
        ],
        responses: {
          200: {
            description: 'Verification successful',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/VerifyPaymentResponse' },
              },
            },
          },
        },
      },
    },
  },
};
