import { prisma } from '../../config/db.js';

class ManagerIncomeService {
  async getIncome(managerId) {
    const managerIncome = await prisma.property_earnings.groupBy({
      by: ['property_id'],
      where: {
        properties: {
          manager_id: managerId,
        },
      },
      _sum: {
        manager_earnings: true,
        gross_amount: true,
      },
    });

    const result = await Promise.all(
      managerIncome.map(async (item) => {
        const property = await prisma.properties.findUnique({
          where: { id: item.property_id },
          select: { title: true, city: true, state: true },
        });

        return {
          property_id: item.property_id,
          property_title: property?.title,
          city: property?.city,
          state: property?.state,
          total_manager_earnings: item._sum.manager_earnings,
          total_gross: item._sum.gross_amount,
        };
      })
    );

    return result;
  }
}

export default new ManagerIncomeService();
