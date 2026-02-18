import { Router } from 'express';
import { UserRole } from '../models/roles.js';
import managerController from '../controllers/propertyManager.controller.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';

const router = Router();

router.use(authenticateWithCustomErrors, authorizeRoles(UserRole.MANAGER));

router.post('/properties', managerController.addProperty);

router.patch('/properties/:id/publish', managerController.publishProperty);

router.patch('/properties/:id', managerController.editProperty);

router.delete('/properties/:id', managerController.removeProperty);

router.get('/properties/mine', managerController.getUserProperty);

router.patch('/bookings/:id/approve', managerController.approveBooking);

router.patch('/bookings/:id/reject', managerController.rejectBooking);

export default router;
