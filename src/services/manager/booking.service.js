import { prisma } from '../../config/db.js';
import {
  BadRequestError,
  ConflictError,
  NotFoundError,
} from '../../shared/errors/index.js';
import {
  buildPaginatedResponse,
  getPagination,
} from '../../utils/pagination.js';
import { booking_status } from '../../generated/prisma/index.js';
import { OrderStatus } from '../../models/order.js';
import { ENV } from '../../config/env.js';
import { calculateDueDate } from '../../utils/calculateDueDate.js';

class ManagerBookingService {
  async getAllBookings(data) {
    const {
      userId,
      page = 1,
      limit = ENV.LIMIT || 15,
      from,
      to,
      order = OrderStatus.DESC,
      status,
    } = data;

    const { skip, take } = getPagination({ page, limit });
    const where = {};

    if (from || to) {
      where.created_at = {};
      if (from) where.created_at.gte = new Date(from);
      if (to) where.created_at.lte = new Date(to);
    }

    if (status) where.status = status;

    const bookings = await prisma.bookings.findMany({
      where: { properties: { manager_id: userId }, ...where },
      skip,
      take,
      orderBy: { created_at: order },
    });

    const total = await prisma.bookings.count({
      where: { properties: { manager_id: userId }, ...where },
    });

    return buildPaginatedResponse({ data: bookings, total, page, limit });
  }

  async viewBookingDetails(data) {
    const { userId, bookingId } = data;

    const booking = await prisma.bookings.findFirst({
      where: { id: bookingId, properties: { manager_id: userId } },
      include: {
        users: {
          select: {
            first_name: true,
            last_name: true,
            phone_number: true,
            email: true,
          },
        },
        properties: { select: { id: true, title: true, address: true } },
      },
    });

    if (!booking) throw new NotFoundError('Booking');

    return {
      status: booking.status,
      id: booking.id,
      start_date: booking.start_date,
      end_date: booking.end_date,
      proposed_amount: booking.proposed_amount,
      cancelled_at: booking.cancelled_at,
      cancellation_reason: booking.cancellation_reason,
      created_at: booking.created_at,
      user: booking.users,
      property: booking.properties,
    };
  }

  async approveBooking(data) {
    const { bookingId, userId } = data;

    return await prisma.$transaction(async (tx) => {
      const booking = await tx.bookings.findUnique({
        where: { id: bookingId, properties: { manager_id: userId } },
        include: {
          properties: { select: { pricing_unit: true, base_price: true } },
        },
      });

      if (!booking) throw new NotFoundError('Booking');

      if (booking.cancelled_at)
        throw new BadRequestError('Cannot approve cancelled booking');

      if (booking.status !== 'pending')
        throw new ConflictError('Booking already processed');

      const existingRental = await tx.rentals.findUnique({
        where: { booking_id: bookingId },
      });
      if (existingRental)
        throw new Error('Rental already created for this booking');

      const rental = await tx.rentals.create({
        data: {
          booking_id: booking.id,
          user_id: booking.user_id,
          property_id: booking.property_id,
          lease_start: booking.start_date,
          lease_end: booking.end_date,
          pricing_unit: booking.properties.pricing_unit,
          agreed_price: booking.proposed_amount,
        },
      });

      const duration = booking.proposed_amount / booking.properties.base_price;

      const schedules = [];

      for (let i = 1; i <= duration; i++) {
        schedules.push({
          rental_id: rental.id,
          due_date: calculateDueDate(
            booking.start_date,
            i,
            booking.properties.pricing_unit
          ),
          amount: booking.properties.base_price,
        });
      }

      await tx.payment_schedules.createMany({
        data: schedules,
      });

      await tx.bookings.update({
        where: { id: booking.id },
        data: {
          status: booking_status.approved,
        },
      });

      return rental;
    });
  }

  async rejectBooking(data) {
    const { bookingId, userId } = data;

    const booking = await prisma.bookings.findFirst({
      where: { id: bookingId, properties: { manager_id: userId } },
    });

    if (!booking) throw new NotFoundError('Booking');

    await prisma.bookings.update({
      where: { id: bookingId, properties: { manager_id: userId } },
      data: { status: booking_status.rejected },
    });
  }
}

export default new ManagerBookingService();
