import { Router } from 'express';
import { UserRole } from '../models/roles.js';
import propertyController from '../controllers/property.controller.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';

const router = Router();

router.use(
  authenticateWithCustomErrors,
  authorizeRoles(UserRole.USER, UserRole.MANAGER, UserRole.ADMIN)
);

router.get('/', propertyController.getProperties);

router.get('/:id', propertyController.getPropertiesById);

export default router;
