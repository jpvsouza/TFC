import User from '../database/models/User';

class UserModel {
  private _model = User;

  public findByEmail = async (email: string): Promise<User | null> =>
    this._model.findOne({ where: { email } });

  public findByPk = async (userId: number): Promise<User | null> => this._model.findByPk(userId);
}

export default UserModel;
