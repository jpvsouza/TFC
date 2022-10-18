import { Router } from 'express';
import authenticate from '../middlewares/authenticate';
import LoginController from '../controllers/loginController';

const LoginRouter = Router();

const loginController = new LoginController();

LoginRouter.post('/', loginController.login);

LoginRouter.get('/validate', authenticate, loginController.validate);

export default LoginRouter;
