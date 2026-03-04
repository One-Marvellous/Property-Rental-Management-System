import adminService from '../services/admin.service.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { SuccessMessages } from '../shared/messages/index.js';

class AdminController {
  async getUsers(req, res, next) {
    try {
      const { page, limit, from, to, order } = req.query;
      const result = await adminService.getAllUsers({
        page,
        limit,
        from,
        to,
        order,
      });
      const { statusCode, message } = SuccessMessages.ADMIN.USERS_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async suspendUser(req, res, next) {
    try {
      const userId = req.params.id;
      const adminId = req.user.userId;
      await adminService.suspendUser({ userId, adminId });
      const { statusCode, message } = SuccessMessages.ADMIN.USER_SUSPENDED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }

  async getManagerApplications(req, res, next) {
    try {
      const { page, limit, status, order, from, to } = req.query;
      const result = await adminService.getManagerApplications({
        page,
        limit,
        status,
        order,
        from,
        to,
      });
      const { statusCode, message } =
        SuccessMessages.ADMIN.APPLICATIONS_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async getManagerApplicationById(req, res, next) {
    try {
      const applicationId = req.params.id;
      const result =
        await adminService.getManagerApplicationById(applicationId);
      const { statusCode, message } = SuccessMessages.ADMIN.APPLICATION_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async approveMangerApplication(req, res, next) {
    try {
      const applicationId = req.params.id;
      const reviewerId = req.user.userId;
      await adminService.approveManagerApplication({
        applicationId,
        reviewerId,
      });
      const { statusCode, message } =
        SuccessMessages.ADMIN.APPLICATION_APPROVED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }

  async rejectMangerApplication(req, res, next) {
    try {
      const applicationId = req.params.id;
      const reviewerId = req.user.userId;
      await adminService.rejectManagerApplication({
        applicationId,
        reviewerId,
      });
      const { statusCode, message } =
        SuccessMessages.ADMIN.APPLICATION_REJECTED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }

  async getPropertySubmissions(req, res, next) {
    try {
      const { page, limit, order, from, to } = req.query;
      const result = await adminService.getPropertySubmissions({
        page,
        limit,
        order,
        from,
        to,
      });
      const { statusCode, message } =
        SuccessMessages.ADMIN.PROPERTY_SUBMISSIONS_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async approvePropertySubmission(req, res, next) {
    try {
      const propertyId = req.params.id;
      const reviewerId = req.user.userId;
      await adminService.approvePropertySubmission(propertyId, reviewerId);
      const { statusCode, message } = SuccessMessages.ADMIN.PROPERTY_APPROVED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }

  async rejectPropertySubmission(req, res, next) {
    try {
      const propertyId = req.params.id;
      const reviewerId = req.user.userId;
      const { rejectionReason } = req.body;
      await adminService.rejectPropertySubmission({
        propertyId,
        reviewerId,
        rejectionReason,
      });
      const { statusCode, message } = SuccessMessages.ADMIN.PROPERTY_REJECTED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }

  async suspendProperty(req, res, next) {
    try {
      const propertyId = req.params.id;
      const reviewerId = req.user.userId;
      await adminService.suspendProperty({ propertyId, reviewerId });
      const { statusCode, message } = SuccessMessages.ADMIN.PROPERTY_SUSPENDED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }

  async getIncomePerProperty(_, res, next) {
    try {
      const result = await adminService.getIncomePerProperty();
      const { statusCode, message } = SuccessMessages.ADMIN.INCOME_FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }
}

export default new AdminController();
