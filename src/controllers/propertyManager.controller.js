import managerService from '../services/propertyManager.service.js';
import { ApiResponse } from '../utils/apiResponse.js';

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

      res
        .status(201)
        .json(new ApiResponse(true, 'Property draft created', result));
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
      res
        .status(200)
        .json(
          new ApiResponse(
            true,
            'Property published awaiting admin approval',
            result
          )
        );
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

      res.status(200).json(new ApiResponse(true, 'Edits saved', result));
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

      res
        .status(201)
        .json(new ApiResponse(true, 'Images uploaded successfully', result));
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
      res
        .status(200)
        .json(new ApiResponse(true, 'Property removed successfully'));
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
      res
        .status(200)
        .json(
          new ApiResponse(true, 'User bookings fetched successfully', result)
        );
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
      res
        .status(200)
        .json(new ApiResponse(true, 'Bookings fetched successfully', result));
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
      res
        .status(200)
        .json(new ApiResponse(true, 'Booking details fetched', result));
    } catch (error) {
      next(error);
    }
  }

  async approveBooking(req, res, next) {
    try {
      const bookingId = req.params.id;
      const userId = req.user.userId;

      await managerService.approveBooking({ bookingId, userId });

      res
        .status(200)
        .json(new ApiResponse(true, 'Booking approved successfully'));
    } catch (error) {
      next(error);
    }
  }

  async rejectBooking(req, res, next) {
    try {
      const bookingId = req.params.id;
      const userId = req.user.userId;

      await managerService.rejectBooking({ bookingId, userId });

      res
        .status(200)
        .json(new ApiResponse(true, 'Booking rejected successfully'));
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

      res.status(200).json(new ApiResponse(true, 'Image removed successfully'));
    } catch (error) {
      next(error);
    }
  }
}

export default new PropertyManagerController();
