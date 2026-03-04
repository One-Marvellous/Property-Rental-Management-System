import { prisma } from '../../config/db.js';
import {
  AppError,
  BadRequestError,
  NotFoundError,
} from '../../shared/errors/index.js';
import {
  buildPaginatedResponse,
  getPagination,
} from '../../utils/pagination.js';
import { OrderStatus } from '../../models/order.js';
import { ENV } from '../../config/env.js';
import { UserRole } from '../../models/roles.js';
import { manager_application_status } from '../../generated/prisma/client.js';

class AdminApplicationsService {
  async getManagerApplications(filters) {
    const {
      page = 1,
      limit = ENV.LIMIT || 15,
      status,
      order = OrderStatus.DESC,
      from,
      to,
    } = filters;

    const { skip, take } = getPagination({ page, limit });
    const where = {};

    if (status) where.status = status;

    if (from || to) {
      where.created_at = {};
      if (from) where.created_at.gte = new Date(from);
      if (to) where.created_at.lte = new Date(to);
    }

    const applications = await prisma.property_manager_applications.findMany({
      where,
      orderBy: { created_at: order },
      skip,
      take,
    });

    const total = await prisma.property_manager_applications.count({ where });

    return buildPaginatedResponse({ data: applications, total, page, limit });
  }

  async getManagerApplicationById(applicationId) {
    const application = await prisma.property_manager_applications.findUnique({
      where: { id: applicationId },
      include: {
        users_property_manager_applications_user_idTousers: {
          omit: { password_hash: true, created_at: true },
        },
      },
    });

    if (!application) throw new NotFoundError('Manager application');

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

  async approveManagerApplication({ applicationId, reviewerId }) {
    const application = await prisma.property_manager_applications.findUnique({
      where: { id: applicationId },
    });

    if (!application) throw new NotFoundError('Manager application');

    if (application.status !== manager_application_status.pending) {
      throw new BadRequestError(
        `Only pending applications can be approved, application is currently ${application.status}`
      );
    }

    await prisma.$transaction(async (tx) => {
      await tx.property_manager_applications.update({
        where: { id: applicationId },
        data: {
          status: manager_application_status.approved,
          reviewed_by: reviewerId,
          reviewed_at: new Date(),
        },
      });

      const managerRole = await tx.roles.findUnique({
        where: { name: UserRole.MANAGER },
      });
      if (!managerRole)
        throw new AppError('Manager role not found', 500, false);

      await tx.user_roles.create({
        data: { user_id: application.user_id, role_id: managerRole.id },
      });
    });
  }

  async rejectManagerApplication({ applicationId, reviewerId }) {
    const application = await prisma.property_manager_applications.findUnique({
      where: { id: applicationId },
    });

    if (!application) throw new NotFoundError('Manager application');

    if (application.status !== manager_application_status.pending) {
      throw new BadRequestError(
        `Only pending applications can be rejected, application is currently ${application.status}`
      );
    }

    await prisma.property_manager_applications.update({
      where: { id: applicationId },
      data: {
        status: manager_application_status.rejected,
        reviewed_by: reviewerId,
        reviewed_at: new Date(),
      },
    });
  }
}

export default new AdminApplicationsService();
