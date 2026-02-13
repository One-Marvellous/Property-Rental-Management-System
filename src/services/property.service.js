import { prisma } from '../config/db.js';
import ApiError from '../utils/apiError.js';
import { LIMIT } from '../constants/pagination.js';
import { buildPaginatedResponse, getPagination } from '../utils/pagination.js';
import { OrderStatus } from '../models/order.js';
import {
  PropertyApprovalStatus,
  PropertyAvailabilityStatus,
} from '../models/property.js';

/**
 * PropertyService handles business logic related to property retrieval and management
 * - getProperties: Retrieves available properties with pagination and optional date filtering
 * - getPropertyById: Fetches detailed information of a specific property by its ID
 */
class PropertyService {
  /**
   * Retrieve available properties with pagination and optional date filtering
   * @param {object} filters - Query filters
   * @param {number} [filters.page=1] - Page number
   * @param {number} [filters.limit=LIMIT] - Items per page
   * @param {string} [filters.from] - ISO start date to filter created_at
   * @param {string} [filters.to] - ISO end date to filter created_at
   * @param {string} [filters.order='desc'] - Sort order for created_at
   * @returns {Promise<object>} Paginated response containing properties
   * @throws {ApiError} when database query fails
   */
  async getProperties(filters) {
    const {
      page = 1,
      limit = LIMIT,
      from,
      to,
      order = OrderStatus.DESC,
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

    // Apply availability_status
    where.availability_status = PropertyAvailabilityStatus.AVAILABLE;

    // Apply approval_status
    where.approval_status = PropertyApprovalStatus.APPROVED;

    // Fetch properties with pagination and filters
    const properties = await prisma.properties.findMany({
      where,
      orderBy: { created_at: order },
      skip,
      take,
    });

    // Get total count for pagination metadata
    const total = await prisma.properties.count({ where });

    return buildPaginatedResponse({
      data: properties,
      total,
      page,
      limit,
    });
  }

  /**
   * Get a single property by ID including owner information
   * @param {string} propertyId - ID of the property
   * @returns {Promise<object>} Property object
   * @throws {ApiError} If property not found (404)
   */
  async getPropertyById(propertyId) {
    const property = await prisma.properties.findUnique({
      where: { id: propertyId },
      include: {
        users: {
          omit: { created_at: true, password_hash: true, is_suspended: true },
        },
      },
    });

    if (!property) throw new ApiError(404, 'Property not found');

    return {
      manager: property.users,
      property: {
        id: property.id,
        created_at: property.created_at,
        description: property.description,
        title: property.title,
        address: property.address,
        city: property.city,
        state: property.state,
        pricing_unit: property.pricing_unit,
        base_price: property.base_price,
        approval_status: property.approval_status,
        availability_status: property.availability_status,
        category_id: property.category_id,
        manager_id: property.manager_id,
        approved_by: property.approved_by,
        approved_at: property.approved_at,
        rejection_reason: property.rejection_reason,
      },
    };
  }
}

export default new PropertyService();
