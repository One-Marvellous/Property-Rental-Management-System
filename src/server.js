import express from 'express';
import { ENV } from './config/env.js';
import { connectDB, disconnectDB } from './config/db.js';

// ==============================
// Import routes
// ==============================

import adminRoutes from './routes/admin.routes.js';
import authRoutes from './routes/auth.routes.js';
import propertyManagerRoutes from './routes/propertyManager.routes.js';
import userRoutes from './routes/user.routes.js';
import { ApiResponse } from './utils/apiResponse.js';

connectDB();

const app = express();

const PORT = ENV.PORT;

// Declare server variable
let server;

// ==============================
// API Routes
// ==============================

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/property-manager', propertyManagerRoutes);
app.use('/api/v1/user', userRoutes);

// Middleware to parse incoming JSON requests
app.use(express.json());

app.get('/api/v1/health', (req, res) => {
  res.status(200).json(
    new ApiResponse(true, 'connection ok', {
      message: 'API is up and running',
    })
  );
});

// ==============================
// Start Server
// ==============================
server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// ==============================
// Handle unhandled promises rejections
// ==============================
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection: ', err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// ==============================
// Handle uncaught exceptions
// ==============================
process.on('unCaughtException', (err) => {
  console.error('Uncaught Exception: ', err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// ==============================
// Graceful shutdown
// ==============================
process.on('SIGTERM', (err) => {
  console.error('SIGTERM received shutting down gracefully: ', err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});
