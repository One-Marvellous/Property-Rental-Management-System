import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client.js';
import logger from './logger.js';

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({
  adapter,
  log: [],
});

const connectDB = async () => {
  try {
    await prisma.$connect();
    logger.info('Database connected successfully', { database: 'PostgreSQL' });
  } catch (error) {
    logger.error('Database connection failed', { error: error.message });
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await prisma.$disconnect();
  logger.info('Database disconnected');
};

export { prisma, connectDB, disconnectDB };
