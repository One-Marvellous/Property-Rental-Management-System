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
  authorizeRoles(UserRole.USER),
  userController.getProperties
);

export default router;
