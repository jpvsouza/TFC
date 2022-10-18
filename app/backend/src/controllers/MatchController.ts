import { RequestHandler } from 'express';
import MatchService from '../services/Match';
import IMatch from '../interfaces/IMatch';

export default class MatchController {
  private _service = new MatchService();

  public getAll: RequestHandler = async (req, res) => {
    const {
      query: { inProgress },
    } = req;
    const matches = await this._service.getAll();
    res
      .status(200)
      .json(
        inProgress
          ? matches.filter((match) => (inProgress === 'true') === match.inProgress)
          : matches,
      );
  };

  public create: RequestHandler = async (req, res) => {
    const match: IMatch = req.body;
    const newMatch = await this._service.create(match);
    res.status(201).json(newMatch);
  };

  public finishMatch: RequestHandler = async (req, res) => {
    const {
      params: { id },
    } = req;
    await this._service.finishMatch(+id);
    res.status(200).json({ message: 'Finished' });
  };

  public updateGoals: RequestHandler = async (req, res) => {
    const { params: { id }, body: goals } = req;
    await this._service.updateGoals(+id, goals);
    res.status(200).json({ message: 'Updated' });
  };
}
