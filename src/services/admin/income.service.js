import { prisma } from '../../config/db.js';

class AdminIncomeService {
  async getIncomePerProperty() {
    const earnings = await prisma.property_earnings.groupBy({
      by: ['property_id'],
      _sum: {
        platform_fee: true,
        gross_amount: true,
      },
    });

    const result = await Promise.all(
      earnings.map(async (e) => {
        const property = await prisma.properties.findUnique({
          where: { id: e.property_id },
          select: { title: true, manager_id: true },
        });

        return {
          property_id: e.property_id,
          property_title: property?.title,
          manager_id: property?.manager_id,
          admin_income: e._sum.platform_fee,
          gross_revenue: e._sum.gross_amount,
        };
      })
    );

    return result;
  }
}

export default new AdminIncomeService();
