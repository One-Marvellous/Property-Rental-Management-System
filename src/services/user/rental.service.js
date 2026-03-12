import { prisma } from '../../config/db.js';
import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';
import { ENV } from '../../config/env.js';
import {
  rental_status,
  schedule_status,
  invoice_status,
} from '../../generated/prisma/index.js';
import { PaymentMode } from '../../models/paymentMode.js';
import stripe from '../../config/stripe.js';

class RentalService {
  async getRental(data) {
    const { userId, rentalId } = data;

    const rental = await prisma.rentals.findUnique({
      where: { id: rentalId, user_id: userId },
      include: {
        invoices: true,
        payment_schedules: {
          where: {
            rental_id: rentalId,
          },
          orderBy: { due_date: 'asc' },
        },
      },
    });

    if (!rental) throw new NotFoundError('Booking');

    return {
      id: rental.id,
      user_id: rental.user_id,
      status: rental.status,
      created_at: rental.created_at,
      booking_id: rental.booking_id,
      property_id: rental.property_id,
      lease_start: rental.lease_start,
      lease_end: rental.lease_end,
      pricing_unit: rental.pricing_unit,
      agreed_price: rental.agreed_price,
      payment_schedules: rental.payment_schedules,
      invoices: rental.invoices,
    };
  }

  async createInstallmentInvoice(rentalId) {
    const schedule = await prisma.payment_schedules.findFirst({
      where: {
        rental_id: rentalId,
        status: schedule_status.pending,
      },
      orderBy: { due_date: 'asc' },
    });

    if (!schedule) throw new new NotFoundError('No unpaid schedules')();

    return await prisma.$transaction(async (tx) => {
      const invoice = await tx.invoices.create({
        data: {
          rental_id: rentalId,
          total_amount: schedule.amount,
        },
      });

      await tx.invoice_schedules.create({
        data: {
          invoice_id: invoice.id,
          schedule_id: schedule.id,
          allocated_amount: schedule.amount,
        },
      });

      return invoice;
    });
  }

  async createFullSettlementInvoice(rentalId) {
    const schedules = await prisma.payment_schedules.findMany({
      where: {
        rental_id: rentalId,
        status: schedule_status.pending,
      },
    });

    if (!schedules.length) throw new Error('Nothing to settle');

    const total = schedules.reduce((sum, s) => sum + Number(s.amount), 0);

    return await prisma.$transaction(async (tx) => {
      const invoice = await tx.invoices.create({
        data: {
          rental_id: rentalId,
          total_amount: total,
        },
      });

      for (const schedule of schedules) {
        await tx.invoice_schedules.create({
          data: {
            invoice_id: invoice.id,
            schedule_id: schedule.id,
            allocated_amount: schedule.amount,
          },
        });
      }

      return invoice;
    });
  }

  async createInvoice(data) {
    const { rentalId, userId, paymentMode } = data;

    const existingInvoice = await prisma.invoices.findFirst({
      where: { rental_id: rentalId, status: invoice_status.pending },
    });

    if (existingInvoice)
      throw new BadRequestError('Invoice already exists for this rental');

    const rental = await prisma.rentals.findFirst({
      where: { id: rentalId, user_id: userId },
    });

    if (!rental) throw new NotFoundError('Rental');

    if (rental.status === rental_status.terminated) {
      throw new BadRequestError('Rental terminated');
    }

    if (paymentMode === PaymentMode.FULL) {
      return this.createFullSettlementInvoice(rentalId);
    } else {
      return this.createInstallmentInvoice(rentalId);
    }
  }

  async createCheckoutSession(data) {
    const { invoiceId, userId } = data;

    const invoice = await prisma.invoices.findFirst({
      where: {
        id: invoiceId,
        status: invoice_status.pending,
        rentals: {
          user_id: userId,
        },
      },
    });

    if (!invoice) throw new NotFoundError('Pending invoice not found');

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'ngn',
            product_data: { name: `Rental Invoice ${invoice.id}` },
            unit_amount: invoice.total_amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `http://localhost:${ENV.PORT}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:${ENV.PORT}/payment/cancel`,
      metadata: {
        payment_id: invoice.id,
        rental_id: invoice.rental_id,
        user_id: userId,
      },
    });

    // Store session ID for later reference
    await prisma.invoices.update({
      where: { id: invoice.id },
      data: {
        stripe_checkout_session_id: session.id,
        stripe_payment_intent_id: session.payment_intent,
      },
    });

    return session;
  }
}

export default new RentalService();
