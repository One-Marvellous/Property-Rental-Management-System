import { Router } from 'express';
import { UserRole } from '../models/role.js';
import {
  authenticateWithCustomErrors,
  authorizeRoles,
} from '../middlewares/auth.middleware.js';

const router = Router();
router.use(authenticateWithCustomErrors, authorizeRoles(UserRole.ADMIN));

export default router;
