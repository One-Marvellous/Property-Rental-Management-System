import { ENV } from '../config/env.js';
import stripe from '../config/stripe.js';
import paymentService from '../services/payment.service.js';
import logger from '../config/logger.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { SuccessMessages } from '../shared/messages/SuccessMessages.js';

const endpointSecret = ENV.ENDPOINT_SECRET;

class PaymentController {
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
        await paymentService.processPaymentTransaction(event);
        break;
      default:
        logger.warn(`Unhandled Stripe event type: ${event.type}`);
    }

    res.send();
  }

  async verifyPayment(req, res, next) {
    try {
      const { id } = req.params;

      const data = await paymentService.verifyPayment(id);

      res
        .status(200)
        .json(new ApiResponse(true, 'Verification successful', data));
    } catch (error) {
      next(error);
    }
  }

  async paymentSuccess(req, res, next) {
    try {
      const { session_id } = req.query;

      const session = await paymentService.getCheckoutSession(session_id);

      const summary = {
        status: session.status,
        payment_status: session.payment_status,
        amount_total: session.amount_total / 100,
        currency: session.currency.toUpperCase(),
        customer_email: session.customer_details?.email ?? null,
        customer_name: session.customer_details?.name ?? null,
        invoice_id: session.metadata?.payment_id ?? null,
        rental_id: session.metadata?.rental_id ?? null,
        payment_intent: session.payment_intent ?? null,
      };

      const { statusCode, message } = SuccessMessages.USER.PAYMENT_SUCCESS;
      res.status(statusCode).json(new ApiResponse(true, message, summary));
    } catch (error) {
      next(error);
    }
  }

  async paymentCancelled(_, res, next) {
    try {
      res.status(200).send('Payment was cancelled. You can try again.');
    } catch (error) {
      next(error);
    }
  }
}

export default new PaymentController();
