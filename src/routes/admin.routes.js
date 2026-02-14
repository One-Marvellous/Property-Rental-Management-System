import { Router } from 'express';
import adminController from '../controllers/admin.controller.js';
import { UserRole } from '../models/roles.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';

const router = Router();

// Protect all admin routes with authentication and authorization
router.use(authenticateWithCustomErrors, authorizeRoles(UserRole.ADMIN));

router.get('/users', adminController.getUsers);

router.patch('/user/:id/suspend', adminController.suspendUser);

router.post('/categories', adminController.createCategory);

router.patch('/categories/:id', adminController.editCategory);

router.delete('/categories/:id', adminController.deleteCategory);

router.get('/manager-applications', adminController.getManagerApplications);

router.patch(
  '/manager-applications/:id/approve',
  adminController.approveMangerApplication
);

router.patch(
  '/manager-applications/:id/reject',
  adminController.rejectMangerApplication
);

router.get('/property-submissions', adminController.getPropertySubmissions);

router.patch(
  '/property/:id/approve',
  adminController.approvePropertySubmission
);

router.patch('/property/:id/reject', adminController.rejectPropertySubmission);

router.patch('/property/:id/suspend', adminController.suspendProperty);

export default router;
