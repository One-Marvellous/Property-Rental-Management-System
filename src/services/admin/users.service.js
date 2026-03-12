import { prisma } from '../../config/db.js';
import {
  BadRequestError,
  ConflictError,
  NotFoundError,
} from '../../shared/errors/index.js';
import {
  buildPaginatedResponse,
  getPagination,
} from '../../utils/pagination.js';
import { OrderStatus } from '../../models/order.js';
import { ENV } from '../../config/env.js';
import { user_status } from '../../generated/prisma/index.js';

class AdminUsersService {
  async getAllUsers(filters) {
    const {
      page = 1,
      limit = ENV.LIMIT || 15,
      from,
      to,
      order = OrderStatus.DESC,
    } = filters;

    const { skip, take } = getPagination({ page, limit });
    const where = {};

    if (from || to) {
      where.created_at = {};
      if (from) where.created_at.gte = new Date(from);
      if (to) where.created_at.lte = new Date(to);
    }

    const users = await prisma.users.findMany({
      where,
      orderBy: { created_at: order },
      omit: { password_hash: true },
      skip,
      take,
    });

    const total = await prisma.users.count({ where });

    return buildPaginatedResponse({ data: users, total, page, limit });
  }

  async suspendUser({ userId, adminId }) {
    const user = await prisma.users.findUnique({ where: { id: userId } });

    if (!user) throw new NotFoundError('User');
    if (user.id === adminId)
      throw new BadRequestError('Admins cannot suspend their own account');
    if (user.status === user_status.suspended)
      throw new ConflictError('User is already suspended');

    await prisma.users.update({
      where: { id: userId },
      data: { status: user_status.suspended },
    });
  }
}

export default new AdminUsersService();
