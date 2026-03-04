import express from 'express';
import path from 'path';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { ENV } from './config/env.js';
import { connectDB, disconnectDB } from './config/db.js';
import { specs } from './config/swagger.js';
import { ApiResponse } from './utils/apiResponse.js';
import logger, { morganStream } from './config/logger.js';
import adminRoutes from './routes/admin.routes.js';
import authRoutes from './routes/auth.routes.js';
import propertyManagerRoutes from './routes/propertyManager.routes.js';
import userRoutes from './routes/user.routes.js';
import propertyRoutes from './routes/property.routes.js';
import categoryRoutes from './routes/category.routes.js';
import paymentRoutes from './routes/payment.route.js';
import globalErrorHandler from './middlewares/error.middleware.js';
import cors from 'cors';

connectDB();

const app = express();

const PORT = ENV.PORT;

let server;

app.use(
  cors({
    origin: [`http://localhost:${PORT}`],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(morgan('combined', { stream: morganStream }));
app.use('/payment', paymentRoutes);

app.use(express.json());

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/doc-json', (_, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(specs);
});

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/manager', propertyManagerRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/properties', propertyRoutes);
app.use('/api/v1/categories', categoryRoutes);

app.get('/api/v1/health', (_, res) => {
  res.status(200).json(
    new ApiResponse(true, 'connection ok', {
      message: 'API is up and running',
    })
  );
});

app.use(globalErrorHandler);

server = app.listen(PORT, () => {
  logger.info(`Server started successfully`, {
    environment: ENV.NODE_ENV,
    port: PORT,
    url: `http://localhost:${PORT}`,
  });
});

process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Rejection', {
    message: err?.message,
    stack: err?.stack,
  });
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception', {
    message: err?.message,
    stack: err?.stack,
  });
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received – shutting down gracefully');
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
