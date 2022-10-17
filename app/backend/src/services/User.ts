import newToken from '../auth/token';
import IUser from '../interfaces/IUser';
import UserModel from '../database/models/UsersModel';

export default class UserService {
  private _userModel = UserModel;

  public login = async (dataUser: IUser): Promise<string> => {
    // const user = await this._userModel.findOne({ where: { email: dataUser.email } });
    const token = newToken({ email: dataUser.email });

    return token;
  };

  // public getRole = async (dataUser: IUser): Promise<string> => {
  //   const user = await this._userModel.findOne({ where: { email: dataUser.email } });
  //   const task = { role: user?.role };

  //   if (user) return task;
  // };
}
