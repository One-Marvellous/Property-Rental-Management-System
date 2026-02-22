import express from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import { ENV } from './config/env.js';
import { connectDB, disconnectDB } from './config/db.js';
import { specs } from './config/swagger.js';
import { ApiResponse } from './utils/apiResponse.js';
import adminRoutes from './routes/admin.routes.js';
import authRoutes from './routes/auth.routes.js';
import propertyManagerRoutes from './routes/propertyManager.routes.js';
import userRoutes from './routes/user.routes.js';
import propertyRoutes from './routes/property.routes.js';
import transactionRoutes from './routes/transaction.route.js';
import globalErrorHandler from './middlewares/error.middleware.js';
import cors from 'cors';

connectDB();

const app = express();

const PORT = ENV.PORT;

let server;

// CORS middleware for Swagger UI and API requests
app.use(
  cors({
    origin: [`http://localhost:${PORT}`], // Allow both frontend and Swagger UI origins
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

// Serve uploaded files (development) so that local images can be accessed via URL
// e.g. GET /uploads/properties/12345-image.jpg
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Swagger API Documentation
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/manager', propertyManagerRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/webhook', transactionRoutes);
app.use('/api/v1/properties', propertyRoutes);

app.get('/api/v1/health', (req, res) => {
  res.status(200).json(
    new ApiResponse(true, 'connection ok', {
      message: 'API is up and running',
    })
  );
});

// Global error handler (must be after routes)
app.use(globalErrorHandler);

server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection: ', err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on('unCaughtException', (err) => {
  console.error('Uncaught Exception: ', err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on('SIGTERM', (err) => {
  console.error('SIGTERM received shutting down gracefully: ', err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});
