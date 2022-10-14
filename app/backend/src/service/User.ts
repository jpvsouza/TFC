// import IService from 'src/interfaces/IService';
// import { IUser } from 'src/interfaces/IUser';
// import { IModel } from 'src/interfaces/IModel';

// export default class UserService implements IService<IUser> {
//   private _user: IModel<IUser>;
//   constructor(model: IModel<IUser>) {
//     this._user = model;
//   }

//   public async create(obj: IUser): Promise<IUser> {
//     return this._user.create(obj);
//   }
// }

import { sign } from 'jsonwebtoken';
import IUserLogin from '../interfaces/IUserLogin';
import User from '../database/models/UsersModel';
import 'dotenv/config';

export default class LoginService {
  private model = User;
  constructor() {
    this.model = new User();
  }

  public async login(dadosLogin: IUserLogin): Promise<string> {
    const { email } = dadosLogin;
    const token = sign({ email }, process.env.JWT_Secret as string, { expiresIn: '7d'});
    return token;
  }
}