import { Router } from 'express';
import LoginControler from '../controllers/loginController';
import authenticate from '../middlewares/authenticate';

const router = Router();
const loginController = new LoginControler();

router.post('/', loginController.login);
router.get('/validate', authenticate, loginController.validate);

export default router;
