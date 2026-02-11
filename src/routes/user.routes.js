import { Router } from 'express';
import { UserRole } from '../models/role.js';
import userController from '../controllers/user.controller.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';

const router = Router();

// GET Properties route

router.get(
  '/properties',
  authenticateWithCustomErrors,
  authorizeRoles(UserRole.USER, UserRole.ADMIN, UserRole.MANAGER),
  userController.getProperties
);

router.get(
  '/properties/:id',
  authenticateWithCustomErrors,
  authorizeRoles(UserRole.USER, UserRole.ADMIN, UserRole.MANAGER),
  userController.getPropertiesById
);

router.post(
  '/bookings',
  authenticateWithCustomErrors,
  authorizeRoles(UserRole.USER),
  userController.createBooking
);
router.patch(
  '/bookings/:id/cancel',
  authenticateWithCustomErrors,
  authorizeRoles(UserRole.USER),
  userController.cancelBooking
);
export default router;
