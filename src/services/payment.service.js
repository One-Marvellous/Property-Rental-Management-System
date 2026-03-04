import { prisma } from '../config/db.js';
import { rental_status, payment_status } from '../generated/prisma/index.js';
import stripe from '../config/stripe.js';
import { AppError } from '../shared/errors/AppError.js';

class PaymentService {
  /**
   * Processes Stripe payment webhook and updates all related tables
   * @param {object} stripeEvent - Stripe webhook event object
   * @returns {Promise<void>}
   */
  async processPaymentTransaction(stripeEvent) {
    // Extract relevant info from Stripe event
    const session = stripeEvent.data.object;
    const invoiceId = session.metadata.invoice_id;
    const rentalId = session.metadata.rental_id;
    const paymentIntentId = session.payment_intent;

    // Transactional update payment, invoice, schedules, rental
    await prisma.$transaction(async (tx) => {
      await tx.payments.create({
        data: {
          invoice_id: invoiceId,
          amount: session.amount_total / 100,
          payment_status: payment_status.successful,
          paid_at: new Date(),
          stripe_charge_id: paymentIntentId,
        },
      });

      await tx.invoices.update({
        where: { id: invoiceId },
        data: {
          status: 'paid',
          paid_at: new Date(),
          stripe_payment_intent_id: paymentIntentId,
        },
      });

      const invoiceSchedules = await tx.invoice_schedules.findMany({
        where: { invoice_id: invoiceId },
      });

      for (const item of invoiceSchedules) {
        await tx.payment_schedules.update({
          where: { id: item.schedule_id },
          data: { status: 'paid' },
        });
      }

      await tx.rentals.update({
        where: { id: rentalId },
        data: { status: rental_status.active },
      });
    });
  }

  async verifyPayment(sessionId) {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent'],
    });

    if (session.payment_status !== 'paid') {
      return new AppError('Payment not completed', 400);
    }

    await this.processPaymentTransaction({
      id: `manual_${session.payment_intent.id}`,
      type: 'checkout.session.completed',
      data: { object: session },
    });
  }

  async getCheckoutSession(sessionId) {
    return await stripe.checkout.sessions.retrieve(sessionId);
  }
}

export default new PaymentService();
