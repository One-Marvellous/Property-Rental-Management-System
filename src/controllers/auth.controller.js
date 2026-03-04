import authService from '../services/auth.service.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { SuccessMessages } from '../shared/messages/index.js';

class AuthController {
  async register(req, res, next) {
    try {
      const { email, password, firstName, lastName, phoneNumber } = req.body;

      const result = await authService.registerUser({
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
      });

      const { statusCode, message } = SuccessMessages.AUTH.REGISTER;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      const result = await authService.loginUser(email, password);

      const { statusCode, message } = SuccessMessages.AUTH.LOGIN;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.body;

      const result = await authService.refreshTokens(refreshToken);

      const { statusCode, message } = SuccessMessages.AUTH.REFRESH_TOKEN;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
