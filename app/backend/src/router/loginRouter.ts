import { Router } from 'express';
import ValidaLogin from '../middlewares/validaLogin';
import LoginControler from '../controller/loginController';

const router = Router();
const loginController = new LoginControler();

router.post('/', ValidaLogin, loginController.login);

export default router;
