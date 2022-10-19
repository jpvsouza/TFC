import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const router = Router();

const leaderboardController = new LeaderboardController();

router.get('/', leaderboardController.getResults);
// router.get('/home', leaderboardController.getHomeResults);
// router.get('/away', leaderboardController.getAwayResults);

export default router;
