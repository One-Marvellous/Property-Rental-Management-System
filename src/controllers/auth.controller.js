import authService from '../services/auth.service.js';
import { ApiResponse } from '../utils/apiResponse.js';
import ApiError from '../utils/apiError.js';

class AuthController {
  async register(req, res) {
    try {
      const { email, password, firstName, lastName, phoneNumber } = req.body;

      const result = await authService.registerUser({
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
      });

      res
        .status(201)
        .json(new ApiResponse(true, 'User registered successfully', result));
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      }
      console.error('Registration error:', error);
      res.status(500).json(new ApiResponse(false, 'Registration failed'));
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      const result = await authService.loginUser(email, password);

      res.status(200).json(new ApiResponse(true, 'Login successful', result));
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      }
      console.error('Login error:', error);
      res.status(500).json(new ApiResponse(false, 'Login failed'));
    }
  }

  async refresh(req, res) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res
          .status(400)
          .json(new ApiResponse(false, 'Refresh token required'));
      }

      const result = await authService.refreshTokens(refreshToken);

      res
        .status(200)
        .json(new ApiResponse(true, 'Token refreshed successfully', result));
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      }
      console.error('Token refresh error:', error);
      res
        .status(401)
        .json(new ApiResponse(false, 'Invalid or expired refresh token'));
    }
  }
}

export default new AuthController();
