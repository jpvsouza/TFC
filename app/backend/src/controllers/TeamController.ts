import { RequestHandler } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  private _service = new TeamService();

  public getAll: RequestHandler = async (_req, res) => {
    const teams = await this._service.getAll();
    res.status(200).json(teams);
  };

  public getById: RequestHandler = async (req, res) => {
    const { params: { id } } = req;
    const team = await this._service.getById(+id);
    res.status(200).json(team);
  };
}
