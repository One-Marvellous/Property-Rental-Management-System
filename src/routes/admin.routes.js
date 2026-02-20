import { Router } from 'express';
import adminController from '../controllers/admin.controller.js';
import { UserRole } from '../models/roles.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';
import { zodValidation } from '../middlewares/zodValidation.middleware.js';
import {
  getUsersValidator,
  idParamValidator,
  createCategoryValidator,
  editCategoryValidator,
  getManagerApplicationsValidator,
  getPropertySubmissionsValidator,
  rejectPropertySubmissionValidator,
} from '../validators/admin.validators.js';

const router = Router();

// Protect all admin routes with authentication and authorization
router.use(authenticateWithCustomErrors, authorizeRoles(UserRole.ADMIN));

router.get(
  '/users',
  zodValidation(getUsersValidator),
  adminController.getUsers
);

router.patch(
  '/user/:id/suspend',
  zodValidation(idParamValidator),
  adminController.suspendUser
);

router.post(
  '/categories',
  zodValidation(createCategoryValidator),
  adminController.createCategory
);

router.patch(
  '/categories/:id',
  zodValidation(editCategoryValidator),
  adminController.editCategory
);

router.delete(
  '/categories/:id',
  zodValidation(idParamValidator),
  adminController.deleteCategory
);

router.get(
  '/manager-applications',
  zodValidation(getManagerApplicationsValidator),
  adminController.getManagerApplications
);

router.get(
  '/manager-applications/:id',
  zodValidation(idParamValidator),
  adminController.getManagerApplicationById
);

router.patch(
  '/manager-applications/:id/approve',
  zodValidation(idParamValidator),
  adminController.approveMangerApplication
);

router.patch(
  '/manager-applications/:id/reject',
  zodValidation(idParamValidator),
  adminController.rejectMangerApplication
);

router.get(
  '/property-submissions',
  zodValidation(getPropertySubmissionsValidator),
  adminController.getPropertySubmissions
);

router.patch(
  '/property/:id/approve',
  zodValidation(idParamValidator),
  adminController.approvePropertySubmission
);

router.patch(
  '/property/:id/reject',
  zodValidation(rejectPropertySubmissionValidator),
  adminController.rejectPropertySubmission
);

router.patch(
  '/property/:id/suspend',
  zodValidation(idParamValidator),
  adminController.suspendProperty
);

export default router;
