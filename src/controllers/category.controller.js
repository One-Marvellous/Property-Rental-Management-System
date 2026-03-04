import categoryService from '../services/category.service.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { SuccessMessages } from '../shared/messages/index.js';

class CategoryController {
  async getAllCategory(req, res, next) {
    try {
      const result = await categoryService.getAllCategory();
      const { statusCode, message } = SuccessMessages.CATEGORY.FETCHED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async createCategory(req, res, next) {
    try {
      const { name, description, displayOrder } = req.body;
      const result = await categoryService.createCategory({
        name,
        description,
        displayOrder,
      });
      const { statusCode, message } = SuccessMessages.CATEGORY.CREATED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async editCategory(req, res, next) {
    try {
      const categoryId = req.params.id;
      const { description, displayOrder } = req.body;
      const result = await categoryService.editCategory({
        categoryId,
        description,
        displayOrder,
      });
      const { statusCode, message } = SuccessMessages.CATEGORY.UPDATED;
      res.status(statusCode).json(new ApiResponse(true, message, result));
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req, res, next) {
    try {
      const categoryId = req.params.id;
      await categoryService.deleteCategory(categoryId);
      const { statusCode, message } = SuccessMessages.CATEGORY.DELETED;
      res.status(statusCode).json(new ApiResponse(true, message));
    } catch (error) {
      next(error);
    }
  }
}

export default new CategoryController();
