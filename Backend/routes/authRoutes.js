import express from 'express';
import { login, signup, checkWebToken } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.post('/check-web-token', checkWebToken);

export default router;
