import { prisma } from '../../config/db.js';

class AdminIncomeService {
  async getIncomePerProperty() {
    const successfulPayments = await prisma.payments.findMany({
      where: { payment_status: 'successful' },
      select: {
        amount: true,
        rentals: {
          select: {
            property_id: true,
            properties: { select: { title: true, manager_id: true } },
          },
        },
      },
    });

    const byProperty = new Map();
    for (const payment of successfulPayments) {
      const propertyId = payment.rentals?.property_id;
      if (!propertyId) continue;
      const existing = byProperty.get(propertyId);
      if (existing) {
        existing.total_income =
          Number(existing.total_income) + Number(payment.amount);
      } else {
        byProperty.set(propertyId, {
          property_id: propertyId,
          property_title: payment.rentals.properties?.title ?? null,
          manager_id: payment.rentals.properties?.manager_id ?? null,
          total_income: Number(payment.amount),
        });
      }
    }

    return Array.from(byProperty.values());
  }
}

export default new AdminIncomeService();
