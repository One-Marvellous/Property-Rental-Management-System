import { Router } from 'express';
import categoryController from '../controllers/category.controller.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';
import { zodValidation } from '../middlewares/zodValidation.middleware.js';
import {
  createCategoryValidator,
  editCategoryValidator,
} from '../validators/admin.validators.js';
import { UserRole } from '../models/roles.js';
import { idParamValidator } from '../validators/category.validator.js';

const router = Router();

// Protect all category routes with authentication
router.use(authenticateWithCustomErrors);
router.get(
  '/',
  authorizeRoles(UserRole.ADMIN, UserRole.MANAGER, UserRole.USER),
  zodValidation(createCategoryValidator),
  categoryController.createCategory
);
router.post(
  '/',
  authorizeRoles(UserRole.ADMIN),
  zodValidation(createCategoryValidator),
  categoryController.createCategory
);

router.patch(
  '/:id',
  authorizeRoles(UserRole.ADMIN),
  zodValidation(editCategoryValidator),
  categoryController.editCategory
);

router.delete(
  '/:id',
  authorizeRoles(UserRole.ADMIN),
  zodValidation(idParamValidator),
  categoryController.deleteCategory
);

export default router;
