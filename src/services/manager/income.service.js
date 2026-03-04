import { prisma } from '../../config/db.js';

class ManagerIncomeService {
  async getIncome(managerId) {
    const successfulPayments = await prisma.payments.findMany({
      where: { payment_status: 'successful' },
      select: {
        amount: true,
        rentals: {
          select: {
            property_id: true,
            properties: {
              select: {
                title: true,
                city: true,
                state: true,
                manager_id: true,
              },
            },
          },
        },
      },
    });

    const byProperty = new Map();
    for (const payment of successfulPayments) {
      const rental = payment.rentals;
      if (!rental || rental.properties?.manager_id !== managerId) continue;
      const propertyId = rental.property_id;
      const existing = byProperty.get(propertyId);
      if (existing) {
        existing.total_income =
          Number(existing.total_income) + Number(payment.amount);
      } else {
        byProperty.set(propertyId, {
          property_id: propertyId,
          property_title: rental.properties?.title ?? null,
          city: rental.properties?.city ?? null,
          state: rental.properties?.state ?? null,
          total_income: Number(payment.amount),
        });
      }
    }

    return Array.from(byProperty.values());
  }
}

export default new ManagerIncomeService();
