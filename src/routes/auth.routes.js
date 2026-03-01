import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import { zodValidation } from '../middlewares/zodValidation.middleware.js';
import {
  loginValidator,
  signupValidator,
  refreshTokenValidator,
} from '../validators/auth.validators.js';

const router = Router();

router.post(
  '/register',
  zodValidation(signupValidator),
  authController.register
);

router.post('/login', zodValidation(loginValidator), authController.login);

router.post(
  '/refresh',
  zodValidation(refreshTokenValidator),
  authController.refresh
);

export default router;
