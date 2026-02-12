import { Router } from 'express';
import { UserRole } from '../models/roles.js';
import userController from '../controllers/user.controller.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticateWithCustomErrors, authorizeRoles(UserRole.USER));

router.get('/properties', userController.getProperties);

router.get('/properties/:id', userController.getPropertiesById);

router.post('/bookings', userController.createBooking);

router.patch('/bookings/:id/cancel', userController.cancelBooking);

router.get('/bookings', userController.getUserBookings);

router.get('/bookings/:id', userController.getBookingById);

router.post('/manager-application', userController.applyForManager);

router.patch(
  '/manager-application/cancel',
  userController.cancelManagerApplication
);

router.get('/manager-application', userController.getManagerApplication);

router.get(
  '/manager-application/status',
  userController.getManagerApplicationStatus
);

export default router;
