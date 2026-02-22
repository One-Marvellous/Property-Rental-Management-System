import userService from '../services/user.service.js';
import { ApiResponse } from '../utils/apiResponse.js';

class UserController {
  async switchUserRole(req, res, next) {
    try {
      const userId = req.user.userId;
      const { newRole } = req.body;

      const result = await userService.switchUserRole({
        userId,
        newRole,
      });

      res
        .status(200)
        .json(new ApiResponse(true, 'Role switched successfully', result));
    } catch (error) {
      next(error);
    }
  }

  async createBooking(req, res, next) {
    try {
      const userId = req.user.userId;
      const { propertyId, duration } = req.body;

      const result = await userService.createBooking({
        userId,
        propertyId,
        duration,
      });

      res
        .status(201)
        .json(new ApiResponse(true, 'Booking successfully created', result));
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
      res
        .status(200)
        .json(
          new ApiResponse(true, 'User bookings fetched successfully', result)
        );
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
      res
        .status(200)
        .json(new ApiResponse(true, 'Booking fetched successfully', result));
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

      res
        .status(200)
        .json(new ApiResponse(true, 'Booking cancelled successfully'));
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

      res
        .status(200)
        .json(
          new ApiResponse(
            true,
            'Manager application submitted successfully',
            result
          )
        );
    } catch (error) {
      next(error);
    }
  }

  async cancelManagerApplication(req, res, next) {
    try {
      const userId = req.user.userId;

      await userService.cancelManagerApplication(userId);

      res
        .status(200)
        .json(
          new ApiResponse(true, 'Manager application cancelled successfully')
        );
    } catch (error) {
      next(error);
    }
  }

  async getLatestManagerApplication(req, res, next) {
    try {
      const userId = req.user.userId;
      const result = await userService.getLatestManagerApplication(userId);
      res
        .status(200)
        .json(
          new ApiResponse(
            true,
            'Manager application fetched successfully',
            result
          )
        );
    } catch (error) {
      next(error);
    }
  }

  async getManagerApplicationStatus(req, res, next) {
    try {
      const userId = req.user.userId;
      const result = await userService.getManagerApplicationStatus(userId);
      res
        .status(200)
        .json(
          new ApiResponse(
            true,
            'Manager application status fetched successfully',
            result
          )
        );
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
      res
        .status(200)
        .json(new ApiResponse(true, 'Rental fetched successfully', result));
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

      res
        .status(201)
        .json(new ApiResponse(true, 'Invoice created successfully', result));
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

      res.status(200).json(
        new ApiResponse(true, 'Stripe checkout session created', {
          url: session.url,
        })
      );
    } catch (error) {
      next(error);
    }
  }

  /**
   * Handle payment success callback, retrieve Stripe session
   */
  async paymentSuccess(req, res, next) {
    try {
      const { session_id } = req.query;

      const session = await userService.getCheckoutSession(session_id);

      res
        .status(200)
        .json(new ApiResponse(true, 'Payment successful', { session }));
    } catch (error) {
      next(error);
    }
  }

  /**
   * Serve payment cancelled page (static or simple response)
   */
  async paymentCancelled(req, res, next) {
    try {
      res.status(200).send('Payment was cancelled. You can try again.');
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
