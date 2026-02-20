import ApiError from '../utils/apiError.js';
import adminService from '../services/admin.service.js';
import { ApiResponse } from '../utils/apiResponse.js';

class AdminController {
  async getUsers(req, res) {
    try {
      const { page, limit, from, to, order } = req.query;
      const result = await adminService.getAllUsers({
        page,
        limit,
        from,
        to,
        order,
      });
      res
        .status(200)
        .json(new ApiResponse(true, 'Users fetched successfully', result));
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error fetching users:', error);
        res.status(500).json(new ApiResponse(false, 'Failed to fetch users'));
      }
    }
  }

  async suspendUser(req, res) {
    try {
      const userId = req.params.id;

      await adminService.suspendUser(userId);
      res
        .status(200)
        .json(new ApiResponse(true, 'User suspended successfully'));
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error suspending user:', error);
        res.status(500).json(new ApiResponse(false, 'Failed to suspend user'));
      }
    }
  }

  async createCategory(req, res) {
    try {
      const { name, description } = req.body;
      const result = await adminService.createCategory({ name, description });
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
      const { description } = req.body;
      const result = await adminService.editCategory(categoryId, description);
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
      await adminService.deleteCategory(categoryId);
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

  async getManagerApplications(req, res) {
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
      res
        .status(200)
        .json(
          new ApiResponse(
            true,
            'Manager applications retrieved successfully',
            result
          )
        );
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error fetching manager applications:', error);
        res
          .status(500)
          .json(new ApiResponse(false, 'Failed to fetch manager applications'));
      }
    }
  }

  async getManagerApplicationById(req, res) {
    try {
      const applicationId = req.params.id;
      const result =
        await adminService.getManagerApplicationById(applicationId);
      res
        .status(200)
        .json(
          new ApiResponse(
            true,
            'Manager application retrieved successfully',
            result
          )
        );
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error fetching manager application:', error);
        res
          .status(500)
          .json(new ApiResponse(false, 'Failed to fetch manager application'));
      }
    }
  }

  async approveMangerApplication(req, res) {
    try {
      const applicationId = req.params.id;
      const reviewerId = req.user.userId;
      await adminService.approveManagerApplication(applicationId, reviewerId);
      res
        .status(200)
        .json(
          new ApiResponse(true, 'Manager application approved successfully')
        );
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error approving manager application:', error);
        res
          .status(500)
          .json(
            new ApiResponse(false, 'Failed to approve manager application')
          );
      }
    }
  }

  async rejectMangerApplication(req, res) {
    try {
      const applicationId = req.params.id;
      const reviewerId = req.user.userId;
      await adminService.rejectManagerApplication(applicationId, reviewerId);
      res
        .status(200)
        .json(
          new ApiResponse(true, 'Manager application rejected successfully')
        );
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error rejecting manager application:', error);
        res
          .status(500)
          .json(new ApiResponse(false, 'Failed to reject manager application'));
      }
    }
  }

  async getPropertySubmissions(req, res) {
    try {
      const { page, limit, order, from, to } = req.query;
      const result = await adminService.getPropertySubmissions({
        page,
        limit,
        order,
        from,
        to,
      });
      res
        .status(200)
        .json(
          new ApiResponse(
            true,
            'Property submissions retrieved successfully',
            result
          )
        );
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error fetching property submissions:', error);
        res
          .status(500)
          .json(new ApiResponse(false, 'Failed to fetch property submissions'));
      }
    }
  }

  async approvePropertySubmission(req, res) {
    try {
      const propertyId = req.params.id;
      const reviewerId = req.user.userId;

      await adminService.approvePropertySubmission(propertyId, reviewerId);
      res
        .status(200)
        .json(
          new ApiResponse(true, 'Property submission approved successfully')
        );
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error approving property submission:', error);
        res
          .status(500)
          .json(
            new ApiResponse(false, 'Failed to approve property submission')
          );
      }
    }
  }

  async rejectPropertySubmission(req, res) {
    try {
      const propertyId = req.params.id;
      const { rejectionReason } = req.body;
      await adminService.rejectPropertySubmission(propertyId, rejectionReason);
      res
        .status(200)
        .json(
          new ApiResponse(true, 'Property submission rejected successfully')
        );
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error rejecting property submission:', error);
        res
          .status(500)
          .json(new ApiResponse(false, 'Failed to reject property submission'));
      }
    }
  }

  async suspendProperty(req, res) {
    try {
      const propertyId = req.params.id;
      await adminService.suspendProperty(propertyId);
      res
        .status(200)
        .json(new ApiResponse(true, 'Property suspended successfully'));
    } catch (error) {
      if (error instanceof ApiError) {
        return res
          .status(error.statusCode)
          .json(new ApiResponse(false, error.message));
      } else {
        console.error('Error suspending property:', error);
        res
          .status(500)
          .json(new ApiResponse(false, 'Failed to suspend property'));
      }
    }
  }
}

export default new AdminController();
