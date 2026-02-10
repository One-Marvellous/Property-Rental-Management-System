import userService from '../services/user.service.js';
import { ApiResponse } from '../utils/apiResponse.js';

class UserController {
  async getProperties(req, res, next) {
    try {
      const result = await userService.getProperties();
      res.status(200).json(new ApiResponse(true, result.message, result.data));
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
