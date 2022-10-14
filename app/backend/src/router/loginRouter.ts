import { Router } from 'express';
import loginControler from '../controller/loginController';
import Login from '../database/models/UsersModel';
import LoginService from '../service/User';

const router = Router();
const loginController = require('../')

router.post('/', (req, res) => loginControler.);

export default router;
