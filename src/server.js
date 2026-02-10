import express from 'express';
import { ENV } from './config/env.js';
import { connectDB, disconnectDB } from './config/db.js';
import { ApiResponse } from './utils/apiResponse.js';
import adminRoutes from './routes/admin.routes.js';
import authRoutes from './routes/auth.routes.js';
import propertyManagerRoutes from './routes/propertyManager.routes.js';
import userRoutes from './routes/user.routes.js';
import globalErrorHandler from './middlewares/error.middleware.js';

connectDB();

const app = express();

const PORT = ENV.PORT;

let server;

app.use(express.json());

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/property-manager', propertyManagerRoutes);
app.use('/api/v1/user', userRoutes);

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
