import { Router } from 'express';
import authenticate from '../middlewares/authenticate';
import LoginControler from '../controllers/loginController';

const router = Router();
const loginController = new LoginControler();

router.post('/', loginController.login);
router.get('/validate', authenticate, loginController.validate);

export default router;
