import { Router } from 'express';
import authController from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/refresh', authController.refresh);

export default router;
