import UserModel from '../models/UserModel';
import ServiceError from '../errors/ServiceError';
import User from '../database/models/User';
import LoginDTO from '../dtos/LoginDTO';
import BCrypt from '../utils/BCrypt';

export default class UserService {
  private _model = new UserModel();

  public getByEmail = async (loginDTO: LoginDTO): Promise<User> => {
    const { email, password } = loginDTO.getData();
    const user = await this._model.getByEmail(email);

    if (!user || !BCrypt.validate(password, user.password)) throw ServiceError.incorrectLogin;

    return user;
  };

  public getById = async (userId: number): Promise<User> => {
    const user = await this._model.getById(userId);
    if (!user) throw ServiceError.userNotFound;
    return user;
  };
}
