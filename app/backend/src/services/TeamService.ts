import ServiceError from '../errors/ServiceError';
import Team from '../database/models/Team';
import TeamModel from '../models/TeamModel';

export default class TeamService {
  private _model = new TeamModel();

  public getAll = async (): Promise<Team[]> => this._model.getAll();

  public getById = async (teamId: number): Promise<Team> => {
    const team = await this._model.getById(teamId);
    if (!team) throw ServiceError.teamNotFound;
    return team;
  };
}
