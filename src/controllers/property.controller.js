import propertyService from '../services/property.service.js';
import { ApiResponse } from '../utils/apiResponse.js';

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

      const result = await propertyService.getPropertyById(propertyId);
      res
        .status(200)
        .json(new ApiResponse(true, 'Property successfully fetched', result));
    } catch (error) {
      next(error);
    }
  }
}

export default new PropertyController();
