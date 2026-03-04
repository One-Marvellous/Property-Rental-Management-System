import { prisma } from '../../config/db.js';
import {
  BadRequestError,
  ConflictError,
  NotFoundError,
} from '../../shared/errors/index.js';
import { UserRole } from '../../models/roles.js';
import { manager_application_status } from '../../generated/prisma/index.js';

class ManagerApplicationService {
  async applyForManager(data) {
    const { userId, reason } = data;

    const existingApplication =
      await prisma.property_manager_applications.findFirst({
        where: { user_id: userId, status: manager_application_status.pending },
      });

    if (existingApplication) {
      throw new ConflictError(
        'You already have a pending property manager application'
      );
    }

    const roles = await prisma.user_roles.findMany({
      where: { user_id: userId },
      include: { roles: true },
    });

    const isManager = roles.some((ur) => ur.roles.name === UserRole.MANAGER);
    if (isManager)
      throw new ConflictError('You are already a property manager');

    const application = await prisma.property_manager_applications.create({
      data: { user_id: userId, reason },
      omit: { reviewed_at: true, reviewed_by: true },
    });

    return application;
  }

  async cancelManagerApplication(userId) {
    const application = await prisma.property_manager_applications.findFirst({
      where: { user_id: userId, status: manager_application_status.pending },
    });

    if (!application) throw new NotFoundError('Pending manager application');

    await prisma.property_manager_applications.update({
      where: { id: application.id },
      data: { status: manager_application_status.cancelled },
    });
  }

  async getLatestManagerApplication(userId) {
    const application = await prisma.property_manager_applications.findFirst({
      where: { user_id: userId },
      omit: { reviewed_at: true, reviewed_by: true },
    });

    if (!application) throw new NotFoundError('Property manager application');

    if (application.status !== manager_application_status.pending) {
      throw new BadRequestError(
        'No pending property manager application found'
      );
    }

    return application;
  }

  async getManagerApplicationStatus(userId) {
    const application = await prisma.property_manager_applications.findFirst({
      where: { user_id: userId },
      select: { status: true },
    });

    if (!application) throw new NotFoundError('Property manager application');

    return { status: application.status };
  }
}

export default new ManagerApplicationService();
