import { Router } from 'express';
import { UserRole } from '../models/roles.js';
import userController from '../controllers/user.controller.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';
import { zodValidation } from '../middlewares/zodValidation.middleware.js';
import {
  switchUserRoleValidator,
  createBookingValidator,
  getUserBookingsValidator,
  idParamValidator,
  cancelBookingValidator,
  applyForManagerValidator,
  createInvoiceValidator,
  sessionIdParamValidator,
} from '../validators/user.validators.js';

const router = Router();

router.post(
  '/switch-role',
  authenticateWithCustomErrors,
  authorizeRoles(UserRole.USER, UserRole.MANAGER, UserRole.ADMIN),
  zodValidation(switchUserRoleValidator),
  userController.switchUserRole
);

router.use(authenticateWithCustomErrors, authorizeRoles(UserRole.USER));

router.post(
  '/bookings',
  zodValidation(createBookingValidator),
  userController.createBooking
);

router.patch(
  '/bookings/:id/cancel',
  zodValidation(cancelBookingValidator),
  userController.cancelBooking
);

router.get(
  '/bookings',
  zodValidation(getUserBookingsValidator),
  userController.getUserBookings
);

router.get(
  '/bookings/:id',
  zodValidation(idParamValidator),
  userController.getBookingById
);

router.post(
  '/manager-application',
  zodValidation(applyForManagerValidator),
  userController.applyForManager
);

router.patch(
  '/manager-application/cancel',
  userController.cancelManagerApplication
);

router.get('/manager-application', userController.getLatestManagerApplication);

router.get(
  '/manager-application/status',
  userController.getManagerApplicationStatus
);

router.get(
  '/rentals:id',
  zodValidation(idParamValidator),
  userController.getRental
);

router.post(
  '/rentals:id/create-invoice',
  zodValidation(createInvoiceValidator),
  userController.createInvoice
);

router.post('/rentals/:id/checkout', userController.createCheckoutSession);

router.get(
  '/payment-success',
  zodValidation(sessionIdParamValidator),
  userController.paymentSuccess
);

router.get('/payment-cancelled', userController.paymentCancelled);

export default router;
