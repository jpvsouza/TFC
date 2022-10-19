import User from '../database/models/User';

export default class UserModel {
  private _model = User;

  public getByEmail = async (email: string): Promise<User | null> =>
    this._model.findOne({ where: { email } });

  public getById = async (userId: number): Promise<User | null> => this._model.findByPk(userId);
}
