import { Router } from 'express';
import authenticate from '../middlewares/authenticate';
import MatchController from '../controllers/MatchController';

const MatchesRouter = Router();

const matchController = new MatchController();

MatchesRouter.get('/', matchController.getAll);
MatchesRouter.post('/', authenticate, matchController.create);
MatchesRouter.patch('/:id/finish', matchController.finishMatch);
MatchesRouter.patch('/:id', matchController.updateGoals);

export default MatchesRouter;
