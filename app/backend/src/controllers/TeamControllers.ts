import { RequestHandler } from 'express';
import TeamService from '../services/Team';

export default class TeamController {
  constructor(private _teamService = new TeamService()) {}

  public getAll: RequestHandler = async (_req, res) => {
    const result = await this._teamService.getAll();
    res.status(200).json(result);
  };

  public getById: RequestHandler = async (req, res) => {
    const { params: { id } } = req;
    const result = await this._teamService.getById(+id);
    res.status(200).json(result);
  };
}
