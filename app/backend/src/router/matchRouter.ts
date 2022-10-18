import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const router = Router();

const matchController = new MatchController();

router.get('/', matchController.getAll);
router.post('/', matchController.create);
router.patch('/:id/finish', matchController.finishMatch);
router.patch('/:id', matchController.updateGoals);

export default router;
