import { prisma } from '../../config/db.js';
import {
  buildPaginatedResponse,
  getPagination,
} from '../../utils/pagination.js';
import { OrderStatus } from '../../models/order.js';
import { payment_status } from '../../generated/prisma/index.js';
import { ENV } from '../../config/env.js';

class UserIncomeService {
  async getUserPaymentHistory(data) {
    const {
      userId,
      page = 1,
      limit = ENV.LIMIT || 15,
      from,
      to,
      order = OrderStatus.DESC,
    } = data;

    const { skip, take } = getPagination({ page, limit });
    const where = {};

    if (from || to) {
      where.created_at = {};
      if (from) where.created_at.gte = new Date(from);
      if (to) where.created_at.lte = new Date(to);
    }

    const payments = await prisma.payments.findMany({
      where: {
        ...where,
        payment_status: payment_status.successful,
        invoices: {
          rentals: {
            user_id: userId,
          },
        },
      },
      include: {
        invoices: {
          include: {
            rentals: {
              include: {
                properties: {
                  select: { title: true, city: true, state: true, id: true },
                },
              },
            },
          },
        },
      },
      orderBy: { created_at: order },
      skip,
      take,
    });

    const formattedPayments = payments.map((p) => ({
      payment_id: p.id,
      amount: p.amount,
      paid_at: p.paid_at,
      property_id: p.invoices.rentals.properties.id,
      property_title: p.invoices.rentals.properties.title,
      city: p.invoices.rentals.properties.city,
      state: p.invoices.rentals.properties.state,
    }));

    const total = await prisma.payments.count({
      where: {
        ...where,
        payment_status: payment_status.successful,
        invoices: {
          rentals: {
            user_id: userId,
          },
        },
      },
    });

    return buildPaginatedResponse({
      data: formattedPayments,
      total,
      page,
      limit,
    });
  }
}

export default new UserIncomeService();
