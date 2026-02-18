import { prisma } from '../config/db.js';
import ApiError from '../utils/apiError.js';
import { buildPaginatedResponse, getPagination } from '../utils/pagination.js';
import {
  property_approval_status,
  booking_status,
} from '../generated/prisma/index.js';
import { OrderStatus } from '../models/order.js';
import { ENV } from '../config/env.js';

/**
 * Service class providing property management features.
 * Operations are performed on behalf of a manager user and include
 * creating, publishing, editing, and removing properties, querying
 * a manager's properties with filters and pagination, and approving or
 * rejecting bookings for properties under the manager's control.
 */
class PropertyManagerService {
  /**
   * Add a new property under a manager's account.
   * @param {Object} data - property attributes and manager id
   * @param {number} data.userId - manager user id
   * @param {string} data.title - property title
   * @param {string} data.description - property description
   * @param {string} data.address - property address
   * @param {string} data.city - city name
   * @param {string} data.state - state name
   * @param {string} data.pricingUnit - pricing unit (e.g., per night)
   * @param {number} data.basePrice - base price of the property
   * @param {number} data.categoryId - category identifier
   * @returns {Promise<Object>} the created property record
   */
  async addProperty(data) {
    const {
      userId,
      title,
      description,
      address,
      city,
      state,
      pricingUnit,
      basePrice,
      categoryId,
    } = data;

    // persist new property in the database
    const property = await prisma.properties.create({
      data: {
        address,
        base_price: basePrice,
        city,
        pricing_unit: pricingUnit,
        state,
        title,
        description,
        manager_id: userId,
        category_id: categoryId,
      },
      omit: {
        approved_at: true,
        approved_by: true,
        rejection_reason: true,
        approval_status: true,
      },
    });

    return property;
  }

  /**
   * Submit a property for admin approval by changing its status to pending.
   * Ensures that the property belongs to the requesting manager.
   * @param {Object} data
   * @param {number} data.userId - manager id
   * @param {number} data.propertyId - id of the property to publish
   * @returns {Promise<Object>} updated property record
   */
  async publishProperty(data) {
    const { userId, propertyId } = data;

    // verify that the property exists and is owned by this manager
    const property = await prisma.properties.findFirst({
      where: {
        manager_id: userId,
        id: propertyId,
      },
    });

    if (!property) {
      throw new ApiError(404, 'Property not found');
    }

    //   edit the approval status
    const updatedProperty = await prisma.properties.update({
      where: {
        id: propertyId,
        manager_id: userId,
      },
      data: {
        approval_status: property_approval_status.pending,
      },
      omit: {
        approved_at: true,
        approved_by: true,
        rejection_reason: true,
        approval_status: true,
      },
    });

    return updatedProperty;
  }

  /**
   * Update an existing property's details.
   * @param {Object} data
   * @param {number} data.userId - manager id
   * @param {number} data.propertyId - property to update
   * @param {string} data.title
   * @param {string} data.description
   * @param {string} data.address
   * @param {string} data.city
   * @param {string} data.state
   * @param {string} data.pricingUnit
   * @param {number} data.basePrice
   * @param {number} data.categoryId
   * @returns {Promise<Object>} the updated property
   */
  async editProperty(data) {
    const {
      userId,
      propertyId,
      title,
      description,
      address,
      city,
      state,
      pricingUnit,
      basePrice,
      categoryId,
    } = data;

    // ensure the property belongs to the requesting manager
    const property = await prisma.properties.findFirst({
      where: {
        manager_id: userId,
        id: propertyId,
      },
    });

    if (!property) {
      throw new ApiError(404, 'Property not found');
    }

    //   build a data object containing only provided fields
    const toUpdate = {};
    if (title != null) toUpdate.title = title;
    if (description != null) toUpdate.description = description;
    if (address != null) toUpdate.address = address;
    if (city != null) toUpdate.city = city;
    if (state != null) toUpdate.state = state;
    if (pricingUnit != null) toUpdate.pricing_unit = pricingUnit;
    if (basePrice != null) toUpdate.base_price = basePrice;
    if (categoryId != null) toUpdate.category_id = categoryId;

    // if nothing to update, just return original property or throw
    if (Object.keys(toUpdate).length === 0) {
      return property; // nothing changed
    }

    const updatedProperty = await prisma.properties.update({
      where: {
        id: propertyId,
        manager_id: userId,
      },
      data: toUpdate,
      omit: {
        approved_at: true,
        approved_by: true,
        rejection_reason: true,
        approval_status: true,
      },
    });

    return updatedProperty;
  }

  /**
   * Delete a property owned by the manager.
   * @param {Object} data
   * @param {number} data.userId
   * @param {number} data.propertyId
   * @returns {Promise<void>}
   */
  async removeProperty(data) {
    const { userId, propertyId } = data;

    // confirm the property exists and is managed by this user
    const property = await prisma.properties.findFirst({
      where: {
        manager_id: userId,
        id: propertyId,
      },
    });

    if (!property) {
      throw new ApiError(404, 'Property not found');
    }

    //   remove the property
    await prisma.properties.delete({
      where: {
        id: propertyId,
        manager_id: userId,
      },
    });

    return;
  }

  /**
   * Retrieve properties owned by a manager with optional filters &
   * pagination.
   * @param {Object} data
   * @param {number} data.userId
   * @param {number} [data.page=1]
   * @param {number} [data.limit] items per page
   * @param {string} [data.from] ISO date to filter created_at >=
   * @param {string} [data.to] ISO date to filter created_at <=
   * @param {string} [data.order] sort order ('asc'|'desc')
   * @param {string} [data.status] approval status filter
   * @returns {Promise<Object>} paginated response { data, total, page, limit }
   */
  async getUserProperty(data) {
    const {
      userId,
      page = 1,
      limit = ENV.LIMIT || 15,
      from,
      to,
      order = OrderStatus.DESC,
      status,
    } = data;

    // Calculate pagination parameters
    const { skip, take } = getPagination(page, limit);

    // Build query conditions
    const where = {};

    // Apply date range filter if provided
    if (from || to) {
      where.created_at = {};

      if (from) where.created_at.gte = new Date(from);
      if (to) where.created_at.lte = new Date(to);
    }

    // Apply user_id filter
    where.manager_id = userId;

    // Apply status filter if provided
    if (status) {
      where.approval_status = status;
    }

    const properties = await prisma.properties.findMany({
      where,
      skip,
      take,
      orderBy: {
        created_at: order,
      },
    });

    const total = await prisma.properties.count({
      where,
    });

    return buildPaginatedResponse({
      data: properties,
      total,
      page,
      limit,
    });
  }

  /**
   * Approve a booking request for a property managed by the user.
   * @param {Object} data
   * @param {number} data.bookingId
   * @param {number} data.userId
   * @returns {Promise<void>}
   */
  async approveBooking(data) {
    const { bookingId, userId } = data;

    // verify booking ownership via property manager relation
    const booking = await prisma.bookings.findFirst({
      where: {
        id: bookingId,
        properties: { manager_id: userId },
      },
    });

    if (!booking) {
      throw new ApiError(404, 'Booking not found');
    }

    await prisma.bookings.update({
      where: {
        id: bookingId,
        properties: {
          manager_id: userId,
        },
      },
      data: {
        status: booking_status.approved,
      },
    });
  }

  /**
   * Reject a booking request for a property managed by the user.
   * @param {Object} data
   * @param {number} data.bookingId
   * @param {number} data.userId
   * @returns {Promise<void>}
   */
  async rejectBooking(data) {
    const { bookingId, userId } = data;

    // verify booking ownership via property manager relation
    const booking = await prisma.bookings.findFirst({
      where: {
        id: bookingId,
        properties: {
          manager_id: userId,
        },
      },
    });

    if (!booking) {
      throw new ApiError(404, 'Booking not found');
    }

    await prisma.bookings.update({
      where: {
        id: bookingId,
        properties: {
          manager_id: userId,
        },
      },
      data: {
        status: booking_status.rejected,
      },
    });
  }
}

export default new PropertyManagerService();
