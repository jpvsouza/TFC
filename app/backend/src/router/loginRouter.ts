import { Router } from 'express';
import ValidaLogin from '../middlewares/validaLogin';
import LoginControler from '../controllers/loginController';
import authenticate from '../middlewares/auth';

const router = Router();
const loginController = new LoginControler();

router.post('/', ValidaLogin, loginController.login);
router.get('/validate', authenticate, loginController.validade);

export default router;
