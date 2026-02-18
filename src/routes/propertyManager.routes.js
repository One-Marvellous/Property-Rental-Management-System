import { Router } from 'express';
import { UserRole } from '../models/roles.js';
import managerController from '../controllers/propertyManager.controller.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';
import { zodValidation } from '../middlewares/zodValidation.middleware.js';
import {
  addPropertyValidator,
  publishPropertyValidator,
  editPropertyValidator,
  removePropertyValidator,
  getUserPropertyValidator,
  approveBookingValidator,
  rejectBookingValidator,
} from '../validators/propertyManager.validators.js';

const router = Router();

router.use(authenticateWithCustomErrors, authorizeRoles(UserRole.MANAGER));

router.post(
  '/properties',
  zodValidation(addPropertyValidator),
  managerController.addProperty
);

router.patch(
  '/properties/:id/publish',
  zodValidation(publishPropertyValidator),
  managerController.publishProperty
);

router.patch(
  '/properties/:id',
  zodValidation(editPropertyValidator),
  managerController.editProperty
);

router.delete(
  '/properties/:id',
  zodValidation(removePropertyValidator),
  managerController.removeProperty
);

router.get(
  '/properties/mine',
  zodValidation(getUserPropertyValidator),
  managerController.getUserProperty
);

router.patch(
  '/bookings/:id/approve',
  zodValidation(approveBookingValidator),
  managerController.approveBooking
);

router.patch(
  '/bookings/:id/reject',
  zodValidation(rejectBookingValidator),
  managerController.rejectBooking
);

export default router;
