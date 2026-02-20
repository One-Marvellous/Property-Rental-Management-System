import { prisma } from '../config/db.js';
import ApiError from '../utils/apiError.js';
import { buildPaginatedResponse, getPagination } from '../utils/pagination.js';
import {
  property_approval_status,
  booking_status,
} from '../generated/prisma/index.js';
import { OrderStatus } from '../models/order.js';
import { ENV } from '../config/env.js';
import imageUploader from '../utils/imageUploader.js';
import { calculateDueDate } from '../utils/calculateDueDate.js';

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

    //   check if already published or pending to prevent unnecessary updates
    if (property.approval_status === property_approval_status.pending) {
      throw new ApiError(400, 'Property is already pending approval');
    }

    if (property.approval_status === property_approval_status.approved) {
      throw new ApiError(400, 'Property is already approved');
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

    //   check if property is approved, if not throw error since edits are only allowed for approved properties
    if (property.approval_status !== property_approval_status.approved) {
      throw new ApiError(400, 'Only approved properties can be edited');
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
   * Cleans up all associated images from storage (Cloudinary/disk) before deletion.
   * Uses transactions to ensure DB consistency; storage cleanup failures are logged but don't fail the operation.
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

    // Fetch all associated images before deletion
    const images = await prisma.property_images.findMany({
      where: { property_id: propertyId },
    });

    // Delete property from DB in a transaction (cascades delete images from DB)
    await prisma.properties.delete({
      where: {
        id: propertyId,
        manager_id: userId,
      },
    });

    // Delete images from storage (Cloudinary/disk) after DB deletion succeeds
    // Capture any failures but don't throw so DB remains consistent
    const cleanupErrors = [];
    await Promise.allSettled(
      images.map(async (image) => {
        try {
          await imageUploader.deleteImageByPublicId(
            image.public_id,
            image.image_url
          );
        } catch (err) {
          // Log but don't throw; DB is already consistent
          cleanupErrors.push({ imageId: image.id, error: err.message });
        }
      })
    );

    // If there were storage cleanup errors, log them as warnings
    if (cleanupErrors.length > 0) {
      console.warn(
        `[PropMgrService] Property ${propertyId} deleted but ${cleanupErrors.length} image(s) failed to delete from storage:`,
        cleanupErrors
      );
    }

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
   * Upload multiple images (max 5 total per property) and attach them to a property.
   * Stores URL and optional public_id for each image.
   * @param {Object} data
   * @param {string} data.userId
   * @param {string} data.propertyId
   * @param {Array} data.files - array of multer file objects
   */
  async addPropertyImages(data) {
    const { userId, propertyId, files } = data;

    // verify property exists and is owned by manager
    const property = await prisma.properties.findFirst({
      where: { id: propertyId, manager_id: userId },
    });
    if (!property) throw new ApiError(404, 'Property not found');

    if (!files || files.length === 0)
      throw new ApiError(400, 'No files provided');

    const existingCount = await prisma.property_images.count({
      where: { property_id: propertyId },
    });
    const MAX = 5;
    if (existingCount >= MAX)
      throw new ApiError(
        400,
        `Maximum of ${MAX} images already uploaded for this property`
      );
    if (existingCount + files.length > MAX) {
      throw new ApiError(
        400,
        `You can upload up to ${MAX - existingCount} more image(s)`
      );
    }

    // Upload all files (parallel) and create DB records with public_id
    const uploads = await Promise.all(
      files.map((f) =>
        imageUploader.uploadImage(f, { folder: `properties/${propertyId}` })
      )
    );

    const created = await prisma.$transaction(
      uploads.map((u) =>
        prisma.property_images.create({
          data: {
            property_id: propertyId,
            image_url: u.url,
            public_id: u.public_id || null,
          },
        })
      )
    );

    return created;
  }

  /**
   * Remove a property image (delete from storage and DB record).
   * Uses stored public_id for robust Cloudinary deletion.
   * @param {Object} data
   * @param {string} data.userId
   * @param {string} data.propertyId
   * @param {string} data.imageId
   */
  async removePropertyImage(data) {
    const { userId, propertyId, imageId } = data;

    // ensure property exists and belongs to user
    const property = await prisma.properties.findFirst({
      where: { id: propertyId, manager_id: userId },
    });
    if (!property) throw new ApiError(404, 'Property not found');

    // find image record
    const image = await prisma.property_images.findFirst({
      where: { id: imageId, property_id: propertyId },
    });
    if (!image) throw new ApiError(404, 'Image not found');

    // delete from storage (use public_id if available, fallback to URL)
    await imageUploader.deleteImageByPublicId(image.public_id, image.image_url);

    // delete db record
    await prisma.property_images.delete({ where: { id: imageId } });
  }

  /**
   * Retrieve bookings associated to a manager with optional filters &
   * pagination.
   * @param {Object} data
   * @param {number} data.userId
   * @param {number} [data.page=1]
   * @param {number} [data.limit] items per page
   * @param {string} [data.from] ISO date to filter created_at >=
   * @param {string} [data.to] ISO date to filter created_at <=
   * @param {string} [data.order] sort order ('asc'|'desc')
   * @param {string} [data.status] booking status filter
   * @returns {Promise<Object>} paginated response { data, total, page, limit }
   */
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

    // Apply status filter if provided
    if (status) {
      where.status = status;
    }

    const bookings = await prisma.bookings.findMany({
      where: { properties: { manager_id: userId }, ...where },
      skip,
      take,
      orderBy: {
        created_at: order,
      },
    });

    const total = await prisma.properties.count({
      where: { properties: { manager_id: userId }, ...where },
    });

    return buildPaginatedResponse({
      data: bookings,
      total,
      page,
      limit,
    });
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
        properties: {
          select: {
            id: true,
            title: true,
            address: true,
          },
        },
      },
    });

    if (!booking) {
      throw new ApiError(404, 'Booking not found');
    }

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

  /**
   * Approve a booking request for a property managed by the user.
   * @param {Object} data
   * @param {string} data.bookingId
   * @param {string} data.userId
   * @returns {Promise<void>}
   */
  async approveBooking(data) {
    const { bookingId, userId } = data;

    return await prisma.$transaction(async (tx) => {
      // Fetch booking
      const booking = await tx.bookings.findUnique({
        where: { id: bookingId, properties: { manager_id: userId } },
        include: {
          properties: {
            select: {
              pricing_unit: true,
              base_price: true,
            },
          },
        },
      });

      if (!booking) {
        throw new Error('Booking not found');
      }

      if (booking.cancelled_at) {
        throw new Error('Cannot approve cancelled booking');
      }

      if (booking.status !== 'pending') {
        throw new Error('Booking already processed');
      }

      // Defensive check (rental already created?)
      const existingRental = await tx.rentals.findUnique({
        where: { booking_id: bookingId },
      });

      if (existingRental) {
        throw new Error('Rental already created for this booking');
      }

      // Create rental
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

      // 5️⃣ Update booking status
      await tx.bookings.update({
        where: { id: booking.id },
        data: {
          status: booking_status.approved,
        },
      });

      return rental;
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
