import categoryService from '../services/category.service.js';
import { ApiResponse } from '../utils/apiResponse.js';
import ApiError from '../utils/apiError.js';

class CategoryController {
  async getAllCategory(req, res) {
    try {
      const result = await categoryService.getAllCategory();

      res
        .status(200)
        .json(new ApiResponse(true, 'Category fetched successfully', result));
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error fetching category:', error);
        res
          .status(500)
          .json(new ApiResponse(false, 'Failed to fetch category'));
      }
    }
  }

  async createCategory(req, res) {
    try {
      const { name, description, displayOrder } = req.body;
      const result = await categoryService.createCategory({
        name,
        description,
        displayOrder,
      });
      res
        .status(201)
        .json(new ApiResponse(true, 'Category created successfully', result));
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error creating category:', error);
        res
          .status(500)
          .json(new ApiResponse(false, 'Failed to create category'));
      }
    }
  }

  async editCategory(req, res) {
    try {
      const categoryId = req.params.id;
      const { description, displayOrder } = req.body;
      const result = await categoryService.editCategory({
        categoryId,
        description,
        displayOrder,
      });
      res
        .status(200)
        .json(new ApiResponse(true, 'Category updated successfully', result));
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error updating category:', error);
        res
          .status(500)
          .json(new ApiResponse(false, 'Failed to update category'));
      }
    }
  }

  async deleteCategory(req, res) {
    try {
      const categoryId = req.params.id;
      await categoryService.deleteCategory(categoryId);
      res
        .status(200)
        .json(new ApiResponse(true, 'Category deleted successfully'));
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error deleting category:', error);
        res
          .status(500)
          .json(new ApiResponse(false, 'Failed to delete category'));
      }
    }
  }
}

export default new CategoryController();
