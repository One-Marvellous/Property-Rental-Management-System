import { prisma } from '../../config/db.js';
import {
  AppError,
  BadRequestError,
  NotFoundError,
} from '../../shared/errors/index.js';
import { ENV } from '../../config/env.js';
import {
  buildPaginatedResponse,
  getPagination,
} from '../../utils/pagination.js';
import { OrderStatus } from '../../models/order.js';
import {
  rental_status,
  payment_status,
  payment_category,
} from '../../generated/prisma/index.js';
import { PaymentMode } from '../../models/paymentMode.js';
import stripe from '../../config/stripe.js';

class RentalService {
  async getRental(data) {
    const { userId, rentalId } = data;

    const rental = await prisma.rentals.findUnique({
      where: { id: rentalId, user_id: userId },
      include: { payments: { orderBy: { created_at: 'asc' } } },
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
      payments: rental.payments,
    };
  }

  async createInvoice(data) {
    const { rentalId, userId, paymentMode } = data;

    const existingPending = await prisma.payments.findFirst({
      where: { rental_id: rentalId, payment_status: payment_status.pending },
    });

    if (existingPending)
      throw new BadRequestError('Invoice already exists for this rental');

    const rental = await prisma.rentals.findFirst({
      where: { id: rentalId, user_id: userId },
    });

    if (!rental) throw new NotFoundError('Rental');

    if (rental.status === rental_status.terminated) {
      throw new BadRequestError('Rental terminated');
    }

    const category =
      paymentMode === PaymentMode.FULL
        ? payment_category.full_payment
        : payment_category.part_payment;

    const payment = await prisma.payments.create({
      data: {
        rental_id: rentalId,
        amount: rental.agreed_price,
        category,
        payment_status: payment_status.pending,
      },
    });

    return payment;
  }

  async createCheckoutSession(data) {
    const { invoiceId, userId } = data;

    const payment = await prisma.payments.findFirst({
      where: {
        id: invoiceId,
        payment_status: payment_status.pending,
        rentals: { user_id: userId },
      },
      include: { rentals: true },
    });

    if (!payment) throw new NotFoundError('Pending payment');
    if (!stripe)
      throw new AppError('Stripe is not configured on this server', 503);

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'ngn',
            product_data: { name: `Rental Payment ${payment.id}` },
            unit_amount: Math.round(Number(payment.amount) * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `http://localhost:${ENV.PORT}/api/v1/user/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:${ENV.PORT}/api/v1/user/payment-cancelled`,
      metadata: {
        payment_id: payment.id,
        rental_id: payment.rental_id,
        user_id: userId,
      },
    });

    return session;
  }

  async getCheckoutSession(sessionId) {
    if (!stripe)
      throw new AppError('Stripe is not configured on this server', 503);
    return await stripe.checkout.sessions.retrieve(sessionId);
  }

  async getUserPaymentHistory(data) {
    const {
      userId,
      page = 1,
      limit = ENV.LIMIT || 15,
      from,
      to,
      order = OrderStatus.DESC,
    } = data;

    const { skip, take } = getPagination({ page, limit });
    const where = {};

    if (from || to) {
      where.created_at = {};
      if (from) where.created_at.gte = new Date(from);
      if (to) where.created_at.lte = new Date(to);
    }

    const payments = await prisma.payments.findMany({
      where: {
        ...where,
        payment_status: payment_status.successful,
        rentals: { user_id: userId },
      },
      include: {
        rentals: {
          include: {
            properties: {
              select: { title: true, city: true, state: true, id: true },
            },
          },
        },
      },
      orderBy: { created_at: order },
      skip,
      take,
    });

    const formattedPayments = payments.map((p) => ({
      payment_id: p.id,
      amount: p.amount,
      paid_at: p.paid_at,
      property_id: p.rentals.properties.id,
      property_title: p.rentals.properties.title,
      city: p.rentals.properties.city,
      state: p.rentals.properties.state,
    }));

    const total = await prisma.payments.count({
      where: {
        ...where,
        payment_status: payment_status.successful,
        rentals: { user_id: userId },
      },
    });

    return buildPaginatedResponse({
      data: formattedPayments,
      total,
      page,
      limit,
    });
  }
}

export default new RentalService();
