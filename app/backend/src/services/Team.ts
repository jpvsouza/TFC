import ITeamWithId from '../interfaces/ITeamWithId';
import Team from '../database/models/Team';

export default class TeamService {
  private _model = Team;

  public async getAll(): Promise<ITeamWithId[]> {
    const result = await this._model.findAll();
    return result;
  }

  public async getById(id: string): Promise<ITeamWithId | null> {
    const result = await this._model.findByPk(id);
    return result;
  }
}
