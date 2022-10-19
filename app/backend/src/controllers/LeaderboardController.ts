import { RequestHandler } from 'express';
import { leaderboardSorter } from '../utils/Sorters';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  private _service = new LeaderboardService();

  public getResults: RequestHandler = async (_req, res) => {
    const results = await this._service.getResults();
    res.status(200).json(results
      .map((result) => result.getCalculatedStatus()).sort(leaderboardSorter));
  };

  public getHomeResults: RequestHandler = async (_req, res) => {
    const results = await this._service.getHomeResults();
    res.status(200).json(results
      .map((result) => result.getCalculatedStatus()).sort(leaderboardSorter));
  };

  public getAwayResults: RequestHandler = async (_req, res) => {
    const results = await this._service.getAwayResults();
    res.status(200).json(results
      .map((result) => result.getCalculatedStatus()).sort(leaderboardSorter));
  };
}
