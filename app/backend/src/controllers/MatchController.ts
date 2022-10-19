import { RequestHandler } from 'express';
import { MatchAttributes } from '../@types';
import MatchDTO from '../dtos/MatchDTO';
import MatchService from '../services/MatchService';

export default class MatchController {
  private _service = new MatchService();

  public getAll: RequestHandler = async (req, res) => {
    const { query: { inProgress } } = req;
    const matches = await this._service.getAll();
    res.status(200).json(inProgress
      ? matches.filter((match) => (inProgress === 'true') === match.inProgress)
      : matches);
  };

  public create: RequestHandler = async (req, res) => {
    const match = new MatchDTO(req.body as MatchAttributes);
    const createdMatch = await this._service.create(match);
    res.status(201).json(createdMatch);
  };

  public finishMatch: RequestHandler = async (req, res) => {
    const { params: { id } } = req;
    await this._service.finishMatch(+id);
    res.status(200).json({ message: 'Finished' });
  };

  public updateGoals: RequestHandler = async (req, res) => {
    const { params: { id }, body: goals } = req;
    await this._service.updateGoals(+id, goals);
    res.status(200).json({ message: 'Updated' });
  };
}
