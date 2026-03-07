import userService from '../services/user.service.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { SuccessMessages } from '../shared/messages/index.js';

class UserController {
  async switchUserRole(req, res, next) {
    try {
      const userId = req.user.userId;
      const { newRole } = req.body;

      const result = await userService.switchUserRole({
        userId,
        newRole,
      });

      const { statusCode, message } = SuccessMessages.USER.ROLE_SWITCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async createBooking(req, res, next) {
    try {
      const userId = req.user.userId;
      const { propertyId, duration, startDate } = req.body;

      const result = await userService.createBooking({
        userId,
        propertyId,
        duration,
        startDate,
      });

      const { statusCode, message } = SuccessMessages.USER.BOOKING_CREATED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async getUserBookings(req, res, next) {
    try {
      const userId = req.user.userId;

      const { page, limit, from, to, order, status } = req.query;

      const result = await userService.getUserBookings({
        userId,
        page,
        limit,
        from,
        to,
        order,
        status,
      });
      const { statusCode, message } = SuccessMessages.USER.BOOKINGS_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async getBookingById(req, res, next) {
    try {
      const userId = req.user.userId;
      const bookingId = req.params.id;

      const result = await userService.getBookingById({
        userId,
        bookingId,
      });
      const { statusCode, message } = SuccessMessages.USER.BOOKING_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async cancelBooking(req, res, next) {
    try {
      const userId = req.user.userId;
      const bookingId = req.params.id;
      const { reason } = req.body;

      await userService.cancelBooking({
        userId,
        bookingId,
        reason,
      });

      const { statusCode, message } = SuccessMessages.USER.BOOKING_CANCELLED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }

  async applyForManager(req, res, next) {
    try {
      const userId = req.user.userId;
      const { reason } = req.body;

      const result = await userService.applyForManager({
        userId,
        reason,
      });

      const { statusCode, message } =
        SuccessMessages.USER.MANAGER_APPLICATION_SUBMITTED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async cancelManagerApplication(req, res, next) {
    try {
      const userId = req.user.userId;

      await userService.cancelManagerApplication(userId);

      const { statusCode, message } =
        SuccessMessages.USER.MANAGER_APPLICATION_CANCELLED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }

  async getLatestManagerApplication(req, res, next) {
    try {
      const userId = req.user.userId;
      const result = await userService.getLatestManagerApplication(userId);
      const { statusCode, message } =
        SuccessMessages.USER.MANAGER_APPLICATION_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async getManagerApplicationStatus(req, res, next) {
    try {
      const userId = req.user.userId;
      const result = await userService.getManagerApplicationStatus(userId);
      const { statusCode, message } =
        SuccessMessages.USER.MANAGER_APPLICATION_STATUS;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async getRental(req, res, next) {
    try {
      const userId = req.user.userId;
      const rentalId = req.params.id;
      const result = await userService.getRental({
        userId,
        rentalId,
      });
      const { statusCode, message } = SuccessMessages.USER.RENTAL_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async createInvoice(req, res, next) {
    try {
      const userId = req.user.userId;
      const rentalId = req.params.id;
      const { paymentMode } = req.body;

      const result = await userService.createInvoice({
        rentalId,
        userId,
        paymentMode,
      });

      const { statusCode, message } = SuccessMessages.USER.INVOICE_CREATED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  /**
   * Initiates Stripe Checkout Session for invoice payment
   */
  async createCheckoutSession(req, res, next) {
    try {
      const userId = req.user.userId;
      const invoiceId = req.params.id;

      const session = await userService.createCheckoutSession({
        invoiceId,
        userId,
      });

      const { statusCode, message } = SuccessMessages.USER.CHECKOUT_CREATED;
      res
        .status(statusCode)
        .json(new ApiResponse(true, message, { url: session.url }));
    } catch (error) {
      next(error);
    }
  }

  async getUserPaymentHistory(req, res, next) {
    try {
      const userId = req.user.userId;
      const { page, limit, from, to, order } = req.query;

      const result = await userService.getUserPaymentHistory({
        userId,
        page,
        limit,
        from,
        to,
        order,
      });

      const { statusCode, message } =
        SuccessMessages.USER.PAYMENT_HISTORY_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
