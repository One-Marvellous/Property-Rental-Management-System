import { Router } from 'express';
import { UserRole } from '../models/roles.js';
import propertyController from '../controllers/property.controller.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';
import { zodValidation } from '../middlewares/zodValidation.middleware.js';
import {
  getPropertiesValidator,
  getPropertiesByIdValidator,
} from '../validators/property.validators.js';

const router = Router();

router.use(
  authenticateWithCustomErrors,
  authorizeRoles(UserRole.USER, UserRole.MANAGER, UserRole.ADMIN)
);

router.get(
  '/',
  zodValidation(getPropertiesValidator),
  propertyController.getProperties
);

router.get(
  '/:id',
  zodValidation(getPropertiesByIdValidator),
  propertyController.getPropertiesById
);

export default router;
