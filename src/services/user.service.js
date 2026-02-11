import { prisma } from '../config/db.js';
import ApiError from '../utils/apiError.js';

class UserService {
  async getProperties(pageNumber, pageSize, filters = {}) {
    try {
      const skip = (pageNumber - 1) * pageSize;
      // const where = filters;
      const properties = await prisma.properties.findMany({
        where: { approval_status: 'approved', ...filters },
        skip,
        take: pageSize,
      });
      return {
        success: true,
        message: 'Properties retrieved successfully',
        data: properties,
      };
    } catch (error) {
      throw new ApiError(500, 'Failed to retrieve properties', error);
    }
  }

  async createBooking(bookingData) {
    try {
      const booking = await prisma.bookings.create({
        data: bookingData,
      });
      return {
        success: true,
        message: 'Booking created successfully',
        data: booking,
      };
    } catch (error) {
      throw new ApiError(500, 'Failed to create booking', error);
    }
  }

  async cancelBooking(bookingId) {
    try {
      const updatedBooking = await prisma.bookings.update({
        where: { id: bookingId },
        data: { status: 'cancelled' },
      });
      return {
        success: true,
        message: 'Booking cancelled successfully',
        data: updatedBooking,
      };
    } catch (error) {
      throw new ApiError(500, 'Failed to cancel booking', error);
    }
  }
}

export default new UserService();
