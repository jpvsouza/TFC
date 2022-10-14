import { Router } from 'express';
import ValidaLogin from '../middlewares/validaLogin';
import LoginControler from '../controllers/loginController';

const router = Router();
const loginController = new LoginControler();

router.post('/', ValidaLogin, loginController.login);
router.get('/validate', loginController.validade);

export default router;
