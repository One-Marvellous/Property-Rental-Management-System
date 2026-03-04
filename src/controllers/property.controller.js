import propertyService from '../services/property.service.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { SuccessMessages } from '../shared/messages/index.js';

class PropertyController {
  async getProperties(req, res, next) {
    try {
      const { city, state, address, page, limit, from, to } = req.query;

      const result = await propertyService.getProperties({
        city,
        state,
        address,
        page,
        limit,
        from,
        to,
      });

      const { statusCode, message } = SuccessMessages.PROPERTY.LIST_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async getPropertiesById(req, res, next) {
    try {
      const propertyId = req.params.id;

      const result = await propertyService.getPropertyById(propertyId);
      const { statusCode, message } = SuccessMessages.PROPERTY.FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }
}

export default new PropertyController();
