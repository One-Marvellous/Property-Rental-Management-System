/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     summary: Health check
 *     description: Check if the API server is running and responsive
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Server is healthy and running
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: connection ok
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: API is up and running
 */
