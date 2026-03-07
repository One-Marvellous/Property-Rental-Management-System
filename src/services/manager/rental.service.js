import { prisma } from '../../config/db.js';
import { NotFoundError } from '../../shared/errors/NotFoundError.js';

class ManagerRentalService {
  async getRental(data) {
    const { userId, rentalId } = data;

    const rental = await prisma.rentals.findUnique({
      where: { id: rentalId, properties: { manager_id: userId } },
      include: {
        invoices: true,
        payment_schedules: {
          where: {
            rental_id: rentalId,
          },
          orderBy: { due_date: 'asc' },
        },
      },
    });

    if (!rental) throw new NotFoundError('Booking');

    return {
      id: rental.id,
      user_id: rental.user_id,
      status: rental.status,
      created_at: rental.created_at,
      booking_id: rental.booking_id,
      property_id: rental.property_id,
      lease_start: rental.lease_start,
      lease_end: rental.lease_end,
      pricing_unit: rental.pricing_unit,
      agreed_price: rental.agreed_price,
      payment_schedules: rental.payment_schedules,
      invoices: rental.invoices,
    };
  }
}

export default new ManagerRentalService();
