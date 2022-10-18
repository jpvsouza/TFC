import Team from '../database/models/Team';

export default class TeamModel {
  private _sequelizeModel = Team;

  public getAll = async (): Promise<Team[]> => this._sequelizeModel.findAll();

  public getAllWithIds = async (ids: number[]) =>
    this._sequelizeModel.findAll({
      where: { id: ids },
    });

  public getById = async (id: number): Promise<Team | null> => this._sequelizeModel.findByPk(id);
}
