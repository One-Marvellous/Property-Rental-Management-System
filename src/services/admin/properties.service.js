import { prisma } from '../../config/db.js';
import { BadRequestError, NotFoundError } from '../../shared/errors/index.js';
import {
  buildPaginatedResponse,
  getPagination,
} from '../../utils/pagination.js';
import { OrderStatus } from '../../models/order.js';
import { ENV } from '../../config/env.js';
import { property_approval_status } from '../../generated/prisma/client.js';

class AdminPropertiesService {
  async getPropertySubmissions(filters) {
    const {
      page = 1,
      limit = ENV.LIMIT || 15,
      from,
      to,
      order = OrderStatus.DESC,
    } = filters;

    const { skip, take } = getPagination({ page, limit });
    const where = { approval_status: property_approval_status.pending };

    if (from || to) {
      where.created_at = {};
      if (from) where.created_at.gte = new Date(from);
      if (to) where.created_at.lte = new Date(to);
    }

    const submissions = await prisma.properties.findMany({
      where,
      omit: { approved_by: true, approved_at: true, rejection_reason: true },
      orderBy: { created_at: order },
      skip,
      take,
    });

    const total = await prisma.properties.count({ where });

    return buildPaginatedResponse({ data: submissions, total, page, limit });
  }

  async approvePropertySubmission(propertyId, reviewerId) {
    const property = await prisma.properties.findUnique({
      where: { id: propertyId },
    });
    if (!property) throw new NotFoundError('Property');

    if (property.approval_status !== property_approval_status.pending) {
      throw new BadRequestError(
        `Only pending properties can be approved, property is currently ${property.approval_status}`
      );
    }

    await prisma.properties.update({
      where: { id: propertyId },
      data: {
        approval_status: property_approval_status.approved,
        approved_at: new Date(),
        approved_by: reviewerId,
      },
    });
  }

  async rejectPropertySubmission({ propertyId, reviewerId, rejectionReason }) {
    const property = await prisma.properties.findUnique({
      where: { id: propertyId },
    });
    if (!property) throw new NotFoundError('Property');

    if (property.approval_status !== property_approval_status.pending) {
      throw new BadRequestError(
        `Only pending properties can be rejected, property is currently ${property.approval_status}`
      );
    }

    await prisma.properties.update({
      where: { id: propertyId },
      data: {
        approval_status: property_approval_status.rejected,
        rejection_reason: rejectionReason,
        rejected_by: reviewerId,
        rejected_at: new Date(),
      },
    });
  }

  async suspendProperty({ propertyId, reviewerId }) {
    const property = await prisma.properties.findUnique({
      where: { id: propertyId },
    });
    if (!property) throw new NotFoundError('Property');

    if (property.approval_status !== property_approval_status.approved) {
      throw new BadRequestError(
        `Only approved properties can be suspended, property is currently ${property.approval_status}`
      );
    }

    await prisma.properties.update({
      where: { id: propertyId },
      data: {
        approval_status: property_approval_status.suspended,
        suspended_by: reviewerId,
        suspended_at: new Date(),
      },
    });
  }
}

export default new AdminPropertiesService();
