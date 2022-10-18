// import ITeamWithId from '../interfaces/ITeamWithId';
import Team from '../database/models/Team';
import TeamModel from '../models/TeamModel';
import ServiceError from '../errors/ServiceError';

export default class TeamService {
  private _model = new TeamModel();

  public async getAll(): Promise<Team[]> {
    const result = await this._model.getAll();
    return result;
  }

  public async getById(id: number): Promise<Team> {
    const result = await this._model.getById(id);
    if (!result) throw ServiceError.teamNotFound;
    return result;
  }
}
