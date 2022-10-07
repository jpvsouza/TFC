import { IUserLogin } from './IUserLogin';

export interface IUser extends IUserLogin {
  username: string;
  role: string;
}
