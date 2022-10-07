import { IUser } from './IUser';

export interface IUserWithId extends IUser {
  id?: number;
}
