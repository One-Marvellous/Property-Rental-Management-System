import { prisma } from '../../config/db.js';
import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';
import { ENV } from '../../config/env.js';
import {
  buildPaginatedResponse,
  getPagination,
} from '../../utils/pagination.js';
import { calculateFutureDate } from '../../utils/calculateFutureDate.js';
import { OrderStatus } from '../../models/order.js';
import {
  property_approval_status,
  property_availability_status,
  booking_status,
} from '../../generated/prisma/index.js';

class BookingService {
  async createBooking(bookingData) {
    const { userId, propertyId, duration, startDate } = bookingData;

    const property = await prisma.properties.findUnique({
      where: { id: propertyId },
    });

    if (!property) throw new NotFoundError('Property');

    if (property.approval_status !== property_approval_status.approved) {
      throw new BadRequestError('Only approved property can be booked');
    }

    if (
      property.availability_status !== property_availability_status.available
    ) {
      throw new BadRequestError('Only available property can be booked');
    }

    const { pricing_unit, base_price } = property;

    const endDate = calculateFutureDate({
      unit: pricing_unit,
      multiplier: duration,
      startDate: new Date(startDate),
    });

    const proposedAmount = base_price * duration;

    const booking = await prisma.bookings.create({
      data: {
        user_id: userId,
        property_id: propertyId,
        start_date: new Date(startDate),
        end_date: endDate,
        proposed_amount: proposedAmount,
      },
      omit: { cancellation_reason: true, cancelled_at: true },
    });

    return booking;
  }

  async getUserBookings(filters) {
    const {
      userId,
      page = 1,
      limit = ENV.LIMIT || 15,
      from,
      to,
      order = OrderStatus.DESC,
      status,
    } = filters;

    const { skip, take } = getPagination({ page, limit });
    const where = { user_id: userId };

    if (from || to) {
      where.created_at = {};
      if (from) where.created_at.gte = new Date(from);
      if (to) where.created_at.lte = new Date(to);
    }

    if (status) where.status = status;

    const bookings = await prisma.bookings.findMany({
      where,
      orderBy: { created_at: order },
      skip,
      take,
    });

    const total = await prisma.bookings.count({ where });

    return buildPaginatedResponse({ data: bookings, total, page, limit });
  }

  async getBookingById(data) {
    const { userId, bookingId } = data;

    const booking = await prisma.bookings.findFirst({
      where: { id: bookingId, user_id: userId },
      include: {
        rentals: true,
        properties: {
          select: {
            address: true,
            city: true,
            base_price: true,
            pricing_unit: true,
            categories: true,
            description: true,
            id: true,
          },
        },
      },
    });

    if (!booking) throw new NotFoundError('Booking');

    return {
      booking: {
        id: booking.id,
        user_id: booking.user_id,
        property_id: booking.property_id,
        start_date: booking.start_date,
        end_date: booking.end_date,
        proposed_amount: booking.proposed_amount,
        status: booking.status,
        cancellation_reason: booking.cancellation_reason,
        cancelled_at: booking.cancelled_at,
        created_at: booking.created_at,
      },
      property: booking.properties,
      rental: booking.rentals,
    };
  }

  async cancelBooking(data) {
    const { userId, reason, bookingId } = data;

    const booking = await prisma.bookings.findFirst({
      where: { user_id: userId, id: bookingId },
    });

    if (!booking) throw new NotFoundError('Booking');

    if (booking.cancellation_reason || booking.cancelled_at) {
      throw new BadRequestError('Booking has already been cancelled');
    }

    await prisma.bookings.update({
      where: { id: booking.id },
      data: {
        status: booking_status.cancelled,
        cancellation_reason: reason,
        cancelled_at: new Date(),
      },
    });
  }
}

export default new BookingService();
