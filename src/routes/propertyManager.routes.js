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
  getAllBookingsValidator,
  viewBookingDetailsValidator,
  approveBookingValidator,
  rejectBookingValidator,
  deleteImageValidator,
  getRentalValidator,
} from '../validators/propertyManager.validators.js';
import { uploadMultipleImages } from '../middlewares/upload.middleware.js';

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

router.get(
  '/bookings/all',
  zodValidation(getAllBookingsValidator),
  managerController.getAllBookings
);

router.get(
  '/bookings/:id',
  zodValidation(viewBookingDetailsValidator),
  managerController.viewBookingDetails
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

router.get(
  '/rentals/:id',
  zodValidation(getRentalValidator),
  managerController.getRental
);

router.post(
  '/properties/:id/images',
  uploadMultipleImages,
  zodValidation(publishPropertyValidator),
  managerController.uploadPropertyImages
);

router.delete(
  '/properties/:id/images/:imageId',
  zodValidation(deleteImageValidator),
  managerController.deletePropertyImage
);

router.get('/income', managerController.getIncome);

export default router;
