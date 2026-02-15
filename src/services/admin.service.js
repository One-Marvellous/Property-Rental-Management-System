import { prisma } from '../config/db.js';
import { OrderStatus } from '../models/order.js';
import ApiError from '../utils/apiError.js';
import { buildPaginatedResponse, getPagination } from '../utils/pagination.js';
import { UserRole } from '../models/roles.js';
import { ENV } from '../config/env.js';
import {
  property_approval_status,
  manager_application_status,
} from '../generated/prisma/index.js';

/**
 * AdminService class handles all admin-related operations
 * Includes user management, category management, application reviews, and property approval workflows
 */
class AdminService {
  /**
   * Retrieves all users with pagination and optional date filtering
   * @param {object} filters - Query filters
   * @param {number} [filters.page=1] - Page number
   * @param {number} [filters.limit=ENV.LIMIT] - Items per page
   * @param {string} [filters.from] - ISO start date to filter created_at
   * @param {string} [filters.to] - ISO end date to filter created_at
   * @param {string} [filters.order='desc'] - Sort order for created_at
   * @returns {Promise<object>} Paginated response with users data
   * @throws {ApiError} If database query fails
   */
  async getAllUsers(filters) {
    const {
      page = 1,
      limit = ENV.LIMIT || 15,
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

    // Fetch users with pagination and filters
    const users = await prisma.users.findMany({
      where,
      orderBy: { created_at: order },
      omit: { password_hash: true, is_suspended: true },
      skip,
      take,
    });

    // Get total count for pagination metadata
    const total = await prisma.users.count({ where });

    return buildPaginatedResponse({
      data: users,
      total,
      page,
      limit,
    });
  }

  /**
   * Suspends an active user account
   * @param {string} userId - The ID of the user to suspend
   * @throws {ApiError} If user not found (404) or already suspended
   */
  async suspendUser(userId) {
    // Verify user exists
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    // Check if user is already suspended
    if (user.is_suspended) {
      throw new ApiError(409, 'User is already suspended');
    }

    // Update user suspension status
    await prisma.users.update({
      where: { id: userId },
      data: { is_suspended: true },
    });
  }

  /**
   * Creates a new property category
   * @param {object} categoryData - Category information
   * @param {string} categoryData.name - Category name (must be unique)
   * @param {string} categoryData.description - Category description
   * @returns {Promise<object>} The created category object
   * @throws {ApiError} If category name already exists (409)
   */
  async createCategory(categoryData) {
    const { name, description } = categoryData;

    // Verify category name uniqueness
    const existingCategory = await prisma.categories.findUnique({
      where: { name },
    });
    if (existingCategory) {
      throw new ApiError(409, 'Category with this name already exists');
    }

    // Insert new category into database
    const newCategory = await prisma.categories.create({
      data: {
        name,
        description,
      },
    });

    return newCategory;
  }

  /**
   * Updates an existing category description
   * @param {string} categoryId - The ID of the category to update
   * @param {string} description - New description for the category
   * @returns {Promise<object>} The updated category object
   * @throws {ApiError} If category not found (404)
   */
  async editCategory(categoryId, description) {
    // Update category description in database
    const updatedCategory = await prisma.categories.update({
      where: { id: categoryId },
      data: {
        description,
      },
    });

    if (!updatedCategory) {
      throw new ApiError(404, 'Category not found');
    }

    return updatedCategory;
  }

  /**
   * Deletes a property category
   * @param {string} categoryId - The ID of the category to delete
   * @throws {ApiError} If category not found (404)
   */
  async deleteCategory(categoryId) {
    // Verify category exists before deletion
    const category = await prisma.categories.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      throw new ApiError(404, 'Category not found');
    }

    // Remove category from database
    await prisma.categories.delete({
      where: { id: categoryId },
    });
  }

  /**
   * Retrieves manager applications with pagination, status filtering, and date range filtering
   * @param {object} filters - Query filters
   * @param {number} [filters.page=1] - Page number
   * @param {number} [filters.limit=ENV.LIMIT] - Items per page
   * @param {string} [filters.from] - ISO start date to filter created_at
   * @param {string} [filters.to] - ISO end date to filter created_at
   * @param {string} [filters.order='desc'] - Sort order for created_at
   * @param {string} filters.status - Application status to filter by (optional) typed as manager_application_status enum
   * @returns {Promise<object>} Paginated response with applications
   */
  async getManagerApplications(filters) {
    const {
      page = 1,
      limit = ENV.LIMIT || 15,
      status,
      order = OrderStatus.DESC,
      from,
      to,
    } = filters;

    // Calculate pagination parameters
    const { skip, take } = getPagination({ page, limit });

    // Build query conditions
    const where = {};

    // Apply status filter if provided
    if (status) {
      where.status = status;
    }

    // Apply date range filter if provided
    if (from || to) {
      where.created_at = {};

      if (from) where.created_at.gte = new Date(from);
      if (to) where.created_at.lte = new Date(to);
    }

    // Fetch manager applications from database
    const applications = await prisma.manager_applications.findMany({
      where,
      orderBy: { created_at: order },
      skip,
      take,
    });

    // Get total count for pagination metadata
    const total = await prisma.manager_applications.count({ where });

    return buildPaginatedResponse({
      data: applications,
      total,
      page,
      limit,
    });
  }

  /**
   * Retrieves a specific manager application by ID with associated user details
   * @param {string} applicationId - The ID of the manager application
   * @returns {Promise<object>} Manager application with user details (excluding sensitive fields)
   * @throws {ApiError} If application not found (404)
   */
  async getManagerApplicationsById(applicationId) {
    // Fetch application with related user info, excluding sensitive fields
    const application = await prisma.property_manager_applications.findUnique({
      where: { id: applicationId },
      include: {
        users_property_manager_applications_user_idTousers: {
          omit: { password_hash: true, is_suspended: true, created_at: true },
        },
      },
    });

    if (!application) {
      throw new ApiError(404, 'Manager application not found');
    }
    return {
      application: {
        id: application.id,
        created_at: application.created_at,
        status: application.status,
        user_id: application.user_id,
        reason: application.reason,
        reviewed_by: application.reviewed_by,
        reviewed_at: application.reviewed_at,
      },
      applicant: application.users_property_manager_applications_user_idTousers,
    };
  }

  /**
   * Approves a pending manager application and assigns manager role to user
   * Uses database transaction to ensure atomicity
   * @param {string} applicationId - The ID of the application to approve
   * @param {string} reviewerId - The ID of the admin reviewing the application
   * @throws {ApiError} If application not found (404), already reviewed (400), or manager role not found (500)
   */
  async approveManagerApplication(applicationId, reviewerId) {
    // Verify application exists
    const application = await prisma.property_manager_applications.findUnique({
      where: { id: applicationId },
    });
    if (!application) {
      throw new ApiError(404, 'Manager application not found');
    }

    // Ensure application is in pending status
    if (application.status !== manager_application_status.pending) {
      throw new ApiError(400, 'Only pending applications can be approved');
    }

    // Execute approval and role assignment in a single transaction
    await prisma.$transaction(async (tx) => {
      // Update application status to approved
      await tx.property_manager_applications.update({
        where: { id: applicationId },
        data: {
          status: manager_application_status.approved,
          reviewed_by: reviewerId,
          reviewed_at: new Date(),
        },
      });

      // Assign manager role to the applicant
      const managerRole = await tx.roles.findUnique({
        where: { name: UserRole.MANAGER },
      });
      if (!managerRole) {
        throw new ApiError(500, 'Manager role not found');
      }
      await tx.user_roles.create({
        data: {
          user_id: application.user_id,
          role_id: managerRole.id,
        },
      });
    });
  }

  /**
   * Rejects a pending manager application
   * @param {string} applicationId - The ID of the application to reject
   * @param {string} reviewerId - The ID of the admin reviewing the application
   * @throws {ApiError} If application not found (404) or already reviewed (400)
   */
  async rejectManagerApplication(applicationId, reviewerId) {
    // Verify application exists
    const application = await prisma.property_manager_applications.findUnique({
      where: { id: applicationId },
    });

    if (!application) {
      throw new ApiError(404, 'Manager application not found');
    }

    // Ensure application is in pending status
    if (application.status !== manager_application_status.pending) {
      throw new ApiError(400, 'Only pending applications can be rejected');
    }

    // Update application status to rejected
    await prisma.property_manager_applications.update({
      where: { id: applicationId },
      data: {
        status: manager_application_status.rejected,
        reviewed_by: reviewerId,
        reviewed_at: new Date(),
      },
    });
  }

  /**
   * Retrieves pending property submissions for admin review with pagination and date filtering
   * @param {object} filters - Query filters
   * @param {number} [filters.page=1] - Page number
   * @param {number} [filters.limit=ENV.LIMIT] - Items per page
   * @param {string} [filters.from] - ISO start date to filter created_at
   * @param {string} [filters.to] - ISO end date to filter created_at
   * @param {string} [filters.order='desc'] - Sort order for created_at
   * @returns {Promise<object>} Paginated response with pending property submissions
   */
  async getPropertySubmissions(filters) {
    const {
      page = 1,
      limit = ENV.LIMIT || 15,
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

    //   Apply filter to only include properties with pending approval status
    where.approval_status = property_approval_status.pending;

    // Fetch property submissions sorted by newest first
    const submissions = await prisma.properties.findMany({
      where,
      orderBy: { created_at: order },
      skip,
      take,
    });

    // Get total count for pagination metadata
    const total = await prisma.properties.count({ where });

    return buildPaginatedResponse({
      data: submissions,
      total,
      page,
      limit,
    });
  }

  /**
   * Approves a pending property submission
   * @param {string} propertyId - The ID of the property to approve
   * @param {string} reviewerId - The ID of the admin approving the property
   * @throws {ApiError} If property not found (404) or not in pending status (400)
   */
  async approvePropertySubmission(propertyId, reviewerId) {
    // Verify property exists
    const property = await prisma.properties.findUnique({
      where: { id: propertyId },
    });
    if (!property) {
      throw new ApiError(404, 'Property not found');
    }

    // Ensure property is in pending approval status
    if (property.approval_status !== property_approval_status.pending) {
      throw new ApiError(400, 'Only pending properties can be approved');
    }

    // Update property approval status
    await prisma.properties.update({
      where: { id: propertyId },
      data: {
        approval_status: property_approval_status.approved,
        approved_at: new Date(),
        approved_by: reviewerId,
      },
    });
  }

  /**
   * Rejects a pending property submission with reason
   * @param {string} propertyId - The ID of the property to reject
   * @param {string} rejectionReason - The reason for rejecting the property
   * @throws {ApiError} If property not found (404) or not in pending status (400)
   */
  async rejectPropertySubmission(propertyId, rejectionReason) {
    // Verify property exists
    const property = await prisma.properties.findUnique({
      where: { id: propertyId },
    });
    if (!property) {
      throw new ApiError(404, 'Property not found');
    }

    // Ensure property is in pending approval status
    if (property.approval_status !== property_approval_status.pending) {
      throw new ApiError(400, 'Only pending properties can be rejected');
    }

    // Update property status and store rejection reason
    await prisma.properties.update({
      where: { id: propertyId },
      data: {
        approval_status: property_approval_status.rejected,
        rejection_reason: rejectionReason,
      },
    });
  }

  /**
   * Suspends an approved property from public listing
   * @param {string} propertyId - The ID of the property to suspend
   * @throws {ApiError} If property not found (404) or not in approved status (400)
   */
  async suspendProperty(propertyId) {
    // Verify property exists
    const property = await prisma.properties.findUnique({
      where: { id: propertyId },
    });
    if (!property) {
      throw new ApiError(404, 'Property not found');
    }

    // Ensure property is approved before suspension
    if (property.approval_status !== property_approval_status.approved) {
      throw new ApiError(400, 'Only approved properties can be suspended');
    }

    // Update property status to suspended
    await prisma.properties.update({
      where: { id: propertyId },
      data: {
        approval_status: property_approval_status.suspended,
      },
    });
  }
}

// Export singleton instance for use throughout the application
export default new AdminService();
