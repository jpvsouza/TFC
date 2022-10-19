import { Router } from 'express';
import authenticate from '../middlewares/authenticate';
import UserController from '../controllers/UserController';

const router = Router();

const userController = new UserController();

router.post('/', userController.login);

router.get('/validate', authenticate, userController.validateUser);

export default router;
