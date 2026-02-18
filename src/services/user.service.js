import { prisma } from '../config/db.js';
import ApiError from '../utils/apiError.js';
import { ENV } from '../config/env.js';
import { buildPaginatedResponse, getPagination } from '../utils/pagination.js';
import { calculateFutureDate } from '../utils/calculateFutureDate.js';
import { UserRole } from '../models/roles.js';
import { OrderStatus } from '../models/order.js';
import { jwt } from '../config/jwt.js';
import {
  property_approval_status,
  manager_application_status,
  property_availability_status,
} from '../generated/prisma/index.js';

/**
 * UserService handles business logic available to regular users
 * - Browse properties
 * - Create and manage bookings
 * - Apply for property manager role
 */
class UserService {
  /**
   * Switch a user's role (e.g., from regular user to property manager)
   * @param {string} data.userId - ID of the user whose role is to be switched
   * @param {string} data.newRole - The new role to assign to the user (e.g., 'user', 'manager')
   * @returns {Promise<object>} Updated user data and new JWT tokens
   * @throws {ApiError} Throws ApiError for invalid role, insufficient permissions, or revoked roles
   */
  async switchUserRole(data) {
    const { userId, newRole } = data;

    // check if the user have been assigned the manager role
    const existingRole = await prisma.user_roles.findFirst({
      where: {
        user_id: userId,
        roles: { name: newRole },
      },
    });

    if (!existingRole) {
      throw new ApiError(
        403,
        `User have no permission to switch to ${newRole} role`
      );
    }

    // check if the role is revoked

    if (existingRole.revoked_at) {
      throw new ApiError(
        403,
        `User's ${newRole} role has been revoked and cannot be switched to`
      );
    }

    // get user
    const user = await prisma.users.findUnique({
      where: { id: userId },
      omit: { password_hash: true, is_suspended: true },
    });

    // generate new token with the new role
    const tokens = jwt.create({
      userId: user.id,
      activeRole: newRole,
    });

    //   Return the new tokens and user info
    return {
      user,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  /**
   * Create a booking for a property
   * @param {object} bookingData
   * @param {string} bookingData.userId - ID of the booking user
   * @param {string} bookingData.propertyId - ID of the property to book
   * @param {number} bookingData.duration - Duration in units matching property pricing_unit
   * @returns {Promise<object>} Created booking record
   * @throws {ApiError} If property not found, not approved, or not available
   */
  async createBooking(bookingData) {
    const { userId, propertyId, duration } = bookingData;

    // Verify property exists
    const property = await prisma.properties.findUnique({
      where: { id: propertyId },
    });
    if (!property) {
      throw new ApiError(404, 'Property not found');
    }
    // Ensure property is approved
    if (property.approval_status !== property_approval_status.approved) {
      throw new ApiError(400, 'Only approved property can be booked');
    }

    // Ensure property availability_status is available
    if (
      property.availability_status !== property_availability_status.available
    ) {
      throw new ApiError(400, 'Only available property can be booked');
    }

    // get it pricing unit and base price from property
    const { pricing_unit, base_price } = property;

    // use switch to go through the pricing_unit and determine duration and calculate end date

    const endDate = calculateFutureDate(pricing_unit, duration);

    const proposedAmount = base_price * duration;

    // create booking
    const booking = await prisma.bookings.create({
      data: {
        user_id: userId,
        property_id: propertyId,
        start_date: new Date(),
        end_date: endDate,
        proposed_amount: proposedAmount,
      },
      omit: { cancellation_reason: true, cancelled_at: true },
    });

    return booking;
  }

  /**
   * Retrieve bookings for a given user
   * @param {object} filters - Query filters
   * @param {number} [filters.page=1] - Page number
   * @param {number} [filters.limit=ENV.LIMIT] - Items per page
   * @param {string} [filters.from] - ISO start date to filter created_at
   * @param {string} [filters.to] - ISO end date to filter created_at
   * @param {string} [filters.order='desc'] - Sort order for created_at
   * @param {string} filters.userId - ID of the user
   * @param {string} filters.status - Booking status filter (optional) [booking_status]
   * @returns {Promise<object>} Paginated response containing user's bookings
   * @throws {ApiError} If no bookings are found for the user (404)
   */
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

    // Calculate pagination parameters
    const { skip, take } = getPagination({ page, limit });

    // Build query conditions
    const where = {};

    // Apply date range filter if provided
    if (from || to) {
      where.created_at = {};

      if (from) where.created_at.gte = new Date(from);
      if (to) where.created_at.lte = new Date(to);
    }

    // Apply user_id filter
    where.user_id = userId;

    // Apply status filter if provided
    if (status) {
      where.status = status;
    }

    const bookings = await prisma.bookings.findMany({
      where,
      orderBy: { created_at: order },
      skip,
      take,
    });

    // Get total count for pagination metadata
    const total = await prisma.bookings.count({ where });

    return buildPaginatedResponse({
      data: bookings,
      total,
      page,
      limit,
    });
  }

  /**
   * Get a single booking by ID for a user
   * @param {object} data
   * @param {string} data.userId - ID of the user who owns the booking
   * @throws {ApiError} If booking not found (404)
   * @returns {Promise<object>} Booking object
   */
  async getBookingById(data) {
    const { userId, bookingId } = data;

    const booking = await prisma.bookings.findFirst({
      where: {
        id: bookingId,
        user_id: userId,
      },
      include: {
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

    if (!booking) {
      throw new ApiError(404, 'Booking not found');
    }
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
    };
  }

  /**
   * Cancel a user's booking
   * @param {object} data
   * @param {string} data.userId - ID of the user who owns the booking
   * @param {string} data.reason - Cancellation reason
   * @param {string} data.bookingId - ID of the booking to cancel
   * @throws {ApiError} If booking not found or already cancelled
   */
  async cancelBooking(data) {
    const { userId, reason, bookingId } = data;
    //    check for booking
    const booking = await prisma.bookings.findFirst({
      where: {
        user_id: userId,
        id: bookingId,
      },
    });

    // see if it exist
    if (!booking) {
      throw new ApiError(404, 'Booking not found');
    }

    // see if it hasn't been canceled already
    if (booking.cancellation_reason || booking.cancelled_at) {
      throw new ApiError(400, 'Booking has already been cancelled');
    }

    // cancel it
    await prisma.bookings.update({
      where: { id: booking.id },
      data: {
        cancellation_reason: reason,
        cancelled_at: new Date(),
      },
    });
  }

  /**
   * Submit an application to become a property manager
   * @param {object} data
   * @param {string} data.userId - ID of the applicant
   * @param {string} data.reason - Reason for applying
   * @returns {Promise<object>} Created application
   * @throws {ApiError} If a pending application exists or user already a manager
   */
  async applyForManager(data) {
    const { userId, reason } = data;

    // check if there is no pending application
    const existingApplication = await prisma.manager_applications.findFirst({
      where: {
        user_id: userId,
        status: 'pending',
      },
    });
    if (existingApplication) {
      throw new ApiError(
        400,
        'You already have a pending property manager application'
      );
    }

    // check if user isn't a property manager from the roles table
    const roles = await prisma.user_roles.findMany({
      where: { user_id: userId },
      include: { roles: true },
    });

    const isManager = roles.some((ur) => ur.roles.name === UserRole.MANAGER);

    if (isManager) {
      throw new ApiError(400, 'You are already a property manager');
    }

    // create application
    const application = await prisma.property_manager_applications.create({
      data: { user_id: userId, reason },
    });
    return application;
  }

  /**
   * Cancel a pending manager application for a user
   * @param {string} userId - ID of the user
   * @throws {ApiError} If pending application not found
   */
  async cancelManagerApplication(userId) {
    // check for pending application
    const application = await prisma.property_manager_applications.findFirst({
      where: {
        user_id: userId,
        status: manager_application_status.pending,
      },
    });

    if (!application) {
      throw new ApiError(404, 'Pending manager application not found');
    }

    // cancel the application
    await prisma.property_manager_applications.update({
      where: { id: application.id },
      data: { status: manager_application_status.cancelled },
    });
  }

  /**
   * Get the latest pending manager application for a user
   * @param {string} userId - ID of the user
   * @returns {Promise<object>} The pending application
   * @throws {ApiError} If application not found or not pending
   */
  async getLatestManagerApplication(userId) {
    const application = await prisma.property_manager_applications.findFirst({
      where: { user_id: userId },
      omit: { reviewed_at: true, reviewed_by: true },
    });
    if (!application) {
      throw new ApiError(404, 'Property manager application not found');
    }

    if (application.status !== manager_application_status.pending) {
      throw new ApiError(400, 'No pending property manager application found');
    }
    return application;
  }

  /**
   * Retrieve status of the user's manager application
   * @param {string} userId - ID of the user
   * @returns {Promise<string>} Application status
   * @throws {ApiError} If application not found
   */
  async getManagerApplicationStatus(userId) {
    const application = await prisma.property_manager_applications.findFirst({
      where: { user_id: userId },
      select: { status: true },
    });
    if (!application) {
      throw new ApiError(404, 'Property manager application not found');
    }
    return { status: application.status };
  }
}

export default new UserService();
