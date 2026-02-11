import { timeStamp } from 'console';
import userService from '../services/user.service.js';
import { ApiResponse } from '../utils/apiResponse.js';

class UserController {
  async getProperties(req, res, next) {
    try {
      const { city, state, pricing_unit, address, pageNumber, pageSize } =
        req.query;
      const filters = {};
      if (city) filters.city = city;
      if (state) filters.state = state;
      if (pricing_unit) filters.pricing_unit = pricing_unit;
      if (address) filters.address = address;

      const result = await userService.getProperties(
        parseInt(pageNumber) || 1,
        parseInt(pageSize) || 10,
        filters
      );
      res.status(200).json(new ApiResponse(true, result.message, result.data));
    } catch (error) {
      next(error);
    }
  }
  async getPropertiesById(req, res, next) {
    try {
      const {
        title,
        description,
        address,
        city,
        state,
        pricing_unit,
        base_price,
        availability_status,
        approval_status,
      } = req.query;

      const result = await userService.getProperties({
        title,
        description,
        address,
        city,
        state,
        pricing_unit,
        base_price,
        availability_status,
        approval_status,
        created_at: timeStamp(),
      });
      res.status(200).json(new ApiResponse(true, result.message, result.data));
    } catch (error) {
      next(error);
    }
  }
  async createBooking(req, res, next) {
    try {
      const { user_id, property_id, start_date, end_date, proposed_amount } =
        req.query;

      const result = await userService.createBooking({
        user_id,
        property_id,
        start_date,
        end_date,
        proposed_amount,
      });
      res.status(200).json(new ApiResponse(true, result.message, result.data));
    } catch (error) {
      next(error);
    }
  }

  async bookings_me(req, res, next) {
    try {
      const { user_id } = req.query;

      const result = await userService.getBookingsByUserId(user_id);
      res.status(200).json(new ApiResponse(true, result.message, result.data));
    } catch (error) {
      next(error);
    }
  }

  async cancelBooking(req, res, next) {
    try {
      const { title, cancellation_reason } = req.query;

      const result = await userService.cancelBooking({
        title,
        cancellation_reason,
      });
      res.status(200).json(new ApiResponse(true, result.message, result.data));
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
