import { ENV } from '../config/env.js';
import stripe from '../config/stripe.js';
import transactionService from '../services/transaction.service.js';

const endpointSecret = ENV.ENDPOINT_SECRET;

class TransactionController {
  /**
   * Handles Stripe webhook for payment updates
   */
  async stripeWebhook(req, res, next) {
    let event = req.body;

    // Only verify the event if you have an endpoint secret defined.
    // Otherwise use the basic event deserialized with JSON.parse
    if (endpointSecret) {
      // Get the signature sent by Stripe
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

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        await transactionService.processPaymentTransaction(event);
        break;
      default:
        // Unexpected event type
        console.log(`Unhandled event type ${event.type}.`);
    }

    // Return a 200 response to acknowledge receipt of the event
    res.send();
  }
}

export default new TransactionController();
