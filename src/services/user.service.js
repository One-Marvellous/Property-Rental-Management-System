import { prisma } from '../config/db.js';
import { ForbiddenError } from '../shared/errors/index.js';
import { jwt } from '../config/jwt.js';

// Sub-modules
import bookingService from './user/booking.service.js';
import managerApplicationService from './user/managerApplication.service.js';
import rentalService from './user/rental.service.js';
import incomeService from './user/income.service.js';

/**
 * UserService — thin delegation layer.
 * Business logic lives in src/services/user/.
 * Controllers import this and call methods exactly as before.
 */
class UserService {
  async switchUserRole(data) {
    const { userId, newRole } = data;

    const existingRole = await prisma.user_roles.findFirst({
      where: { user_id: userId, roles: { name: newRole } },
    });

    if (!existingRole) {
      throw new ForbiddenError(
        `User have no permission to switch to ${newRole} role`
      );
    }

    if (existingRole.revoked_at) {
      throw new ForbiddenError(
        `User's ${newRole} role has been revoked and cannot be switched to`
      );
    }

    const user = await prisma.users.findUnique({
      where: { id: userId },
      omit: { password_hash: true, deleted_at: true },
    });

    const tokens = jwt.create({ userId: user.id, activeRole: newRole });

    return {
      user: { ...user, activeRole: newRole },
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
  }

  createBooking(data) {
    return bookingService.createBooking(data);
  }

  getUserBookings(filters) {
    return bookingService.getUserBookings(filters);
  }

  getBookingById(data) {
    return bookingService.getBookingById(data);
  }

  cancelBooking(data) {
    return bookingService.cancelBooking(data);
  }

  applyForManager(data) {
    return managerApplicationService.applyForManager(data);
  }

  cancelManagerApplication(userId) {
    return managerApplicationService.cancelManagerApplication(userId);
  }

  getLatestManagerApplication(userId) {
    return managerApplicationService.getLatestManagerApplication(userId);
  }

  getManagerApplicationStatus(userId) {
    return managerApplicationService.getManagerApplicationStatus(userId);
  }

  getRental(data) {
    return rentalService.getRental(data);
  }

  createInvoice(data) {
    return rentalService.createInvoice(data);
  }

  createCheckoutSession(data) {
    return rentalService.createCheckoutSession(data);
  }

  getUserPaymentHistory(data) {
    return incomeService.getUserPaymentHistory(data);
  }
}

export default new UserService();
