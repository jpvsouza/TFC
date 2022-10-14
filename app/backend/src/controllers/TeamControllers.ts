import { Request, Response } from 'express';
import TeamService from 'src/services/Team';

export default class TeamController {
  constructor(private teamService = new TeamService()) {}

  public getAll = async (req: Request, res: Response): Promise<Response> => {
    const response = await this.teamService.getAll();
    return res.status(200).json(response);
  };

  public getById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
      const response = await this.teamService.getById(id);
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ err });
    }
  };
}
