import IUserLogin from './IUserLogin';

export default interface IUser extends IUserLogin {
  username: string;
  role: string;
}
