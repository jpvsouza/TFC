import ITeamWithId from '../interfaces/ITeamWithId';
import Team from '../database/models/TeamsModel';

export default class TeamService {
  private model = Team;

  public async getAll(): Promise<ITeamWithId[] | null> {
    const result = await this.model.findAll();
    return result;
  }

  public async getById(id: string): Promise<ITeamWithId | null> {
    const result = await this.model.findByPk(id);
    return result;
  }
}
