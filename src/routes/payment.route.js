import { Router } from 'express';
import paymentController from '../controllers/payment.controller.js';
import express from 'express';
import { zodValidation } from '../middlewares/zodValidation.middleware.js';
import { sessionIdParamValidator } from '../validators/payment.validators.js';

const router = Router();

router.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  paymentController.stripeWebhook
);

router.post(
  '/verify/:id',
  zodValidation(sessionIdParamValidator),
  paymentController.verifyPayment
);

router.get(
  '/success',
  zodValidation(sessionIdParamValidator),
  paymentController.paymentSuccess
);

router.get('/cancel', paymentController.paymentCancelled);

export default router;
