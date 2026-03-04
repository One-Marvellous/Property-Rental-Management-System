import { ENV } from '../config/env.js';
import stripe from '../config/stripe.js';
import transactionService from '../services/transaction.service.js';
import logger from '../config/logger.js';

const endpointSecret = ENV.ENDPOINT_SECRET;

class TransactionController {
  /**
   * Handles Stripe webhook for payment updates
   */
  async stripeWebhook(req, res, next) {
    let event = req.body;

    if (endpointSecret) {
      const signature = req.headers['stripe-signature'];
      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          signature,
          endpointSecret
        );
      } catch (err) {
        next(err);
      }
    }

    switch (event.type) {
      case 'checkout.session.completed':
        await transactionService.processPaymentTransaction(event);
        break;
      default:
        logger.warn(`Unhandled Stripe event type: ${event.type}`);
    }

    res.send();
  }
}

export default new TransactionController();
