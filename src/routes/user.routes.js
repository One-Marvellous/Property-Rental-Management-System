import { Router } from 'express';
import { UserRole } from '../models/roles.js';
import userController from '../controllers/user.controller.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';

const router = Router();

// GET Properties route

router.use(authenticateWithCustomErrors, authorizeRoles(UserRole.USER));

router.get('/properties', userController.getProperties);

export default router;
