import { Router } from 'express';
import MatchController from '../controllers/MatchController';
import authenticate from '../middlewares/authenticate';

const router = Router();

const matchController = new MatchController();

router.get('/', matchController.getAll);
router.post('/', authenticate, matchController.create);
router.patch('/:id/finish', matchController.finishMatch);
router.patch('/:id', matchController.updateGoals);

export default router;
