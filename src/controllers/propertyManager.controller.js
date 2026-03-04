import managerService from '../services/propertyManager.service.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { SuccessMessages } from '../shared/messages/index.js';

class PropertyManagerController {
  async addProperty(req, res, next) {
    try {
      const userId = req.user.userId;
      const {
        title,
        description,
        address,
        city,
        state,
        pricingUnit,
        basePrice,
        categoryId,
      } = req.body;

      const result = await managerService.addProperty({
        userId,
        title,
        description,
        address,
        city,
        state,
        pricingUnit,
        basePrice,
        categoryId,
      });

      const { statusCode, message } = SuccessMessages.MANAGER.PROPERTY_CREATED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async publishProperty(req, res, next) {
    try {
      const userId = req.user.userId;
      const propertyId = req.params.id;

      const result = await managerService.publishProperty({
        userId,
        propertyId,
      });
      const { statusCode, message } =
        SuccessMessages.MANAGER.PROPERTY_PUBLISHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async editProperty(req, res, next) {
    try {
      const userId = req.user.userId;
      const propertyId = req.params.id;
      const {
        title,
        description,
        address,
        city,
        state,
        pricingUnit,
        basePrice,
        categoryId,
      } = req.body;

      const result = await managerService.editProperty({
        propertyId,
        userId,
        title,
        description,
        address,
        city,
        state,
        pricingUnit,
        basePrice,
        categoryId,
      });

      const { statusCode, message } = SuccessMessages.MANAGER.PROPERTY_UPDATED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async uploadPropertyImages(req, res, next) {
    try {
      const userId = req.user.userId;
      const propertyId = req.params.id;

      // multer stores files on req.files when using array
      const files = req.files;
      const result = await managerService.addPropertyImages({
        userId,
        propertyId,
        files,
      });

      const { statusCode, message } = SuccessMessages.MANAGER.IMAGES_UPLOADED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async removeProperty(req, res, next) {
    try {
      const userId = req.user.userId;
      const propertyId = req.params.id;

      await managerService.removeProperty({
        userId,
        propertyId,
      });
      const { statusCode, message } = SuccessMessages.MANAGER.PROPERTY_REMOVED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }

  async getUserProperty(req, res, next) {
    try {
      const userId = req.user.userId;

      const { page, limit, from, to, order, status } = req.query;

      const result = await managerService.getUserProperty({
        userId,
        page,
        limit,
        from,
        to,
        order,
        status,
      });
      const { statusCode, message } =
        SuccessMessages.MANAGER.PROPERTIES_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async getAllBookings(req, res, next) {
    try {
      const userId = req.user.userId;

      const { page, limit, from, to, order, status } = req.query;

      const result = await managerService.getAllBookings({
        userId,
        page,
        limit,
        from,
        to,
        order,
        status,
      });
      const { statusCode, message } = SuccessMessages.MANAGER.BOOKINGS_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async viewBookingDetails(req, res, next) {
    try {
      const userId = req.user.userId;
      const bookingId = req.params.id;

      const result = await managerService.viewBookingDetails({
        userId,
        bookingId,
      });
      const { statusCode, message } = SuccessMessages.MANAGER.BOOKING_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async approveBooking(req, res, next) {
    try {
      const bookingId = req.params.id;
      const userId = req.user.userId;

      const rental = await managerService.approveBooking({ bookingId, userId });

      res;
      const { statusCode, message } = SuccessMessages.MANAGER.BOOKING_APPROVED;
      res.status(statusCode).json(new ApiResponse(true, message, { rental }));
    } catch (error) {
      next(error);
    }
  }

  async rejectBooking(req, res, next) {
    try {
      const bookingId = req.params.id;
      const userId = req.user.userId;

      await managerService.rejectBooking({ bookingId, userId });

      const { statusCode, message } = SuccessMessages.MANAGER.BOOKING_REJECTED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }

  async deletePropertyImage(req, res, next) {
    try {
      const userId = req.user.userId;
      const propertyId = req.params.id;
      const imageId = req.params.imageId;

      await managerService.removePropertyImage({ userId, propertyId, imageId });

      const { statusCode, message } = SuccessMessages.MANAGER.IMAGE_REMOVED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }

  async getIncome(req, res, next) {
    try {
      const userId = req.user.userId;

      const result = await managerService.getIncome(userId);

      const { statusCode, message } = SuccessMessages.MANAGER.INCOME_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }
}

export default new PropertyManagerController();
