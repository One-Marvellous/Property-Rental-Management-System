import userService from '../services/user.service.js';
import { ApiResponse } from '../utils/apiResponse.js';

class UserController {
  async getProperties(req, res, next) {
    try {
      const { city, state, address, page, limit, from, to } = req.query;

      const result = await userService.getProperties({
        city,
        state,
        address,
        page,
        limit,
        from,
        to,
      });

      res
        .status(200)
        .json(new ApiResponse(true, 'Properties fetched successfully', result));
    } catch (error) {
      next(error);
    }
  }

  async getPropertiesById(req, res, next) {
    try {
      const propertyId = req.params.id;

      const result = await userService.getPropertyById(propertyId);
      res
        .status(200)
        .json(new ApiResponse(true, 'Property successfully fetched', result));
    } catch (error) {
      next(error);
    }
  }

  async createBooking(req, res, next) {
    try {
      const userId = req.user.userId;
      const { propertyId, duration } = req.query;

      const result = await userService.createBooking({
        userId,
        propertyId,
        duration,
      });

      res
        .status(200)
        .json(new ApiResponse(true, 'Booking successfully created', result));
    } catch (error) {
      next(error);
    }
  }

  async getUserBookings(req, res, next) {
    try {
      const userId = req.user.userId;

      const { page, limit, from, to, order } = req.query;

      const result = await userService.getBookingsByUserId({
        userId,
        page,
        limit,
        from,
        to,
        order,
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
      const { reason } = req.body;

      await userService.cancelBooking({
        userId,
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

  async getManagerApplication(req, res, next) {
    try {
      const userId = req.user.userId;
      const result = await userService.getManagerApplication(userId);
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
}

export default new UserController();
