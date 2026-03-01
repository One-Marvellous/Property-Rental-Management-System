import { Router } from 'express';
import transactionController from '../controllers/transaction.controller.js';
import express from 'express';

const router = Router();

router.post(
  '/',
  express.raw({ type: 'application/json' }),
  transactionController.stripeWebhook
);

export default router;
