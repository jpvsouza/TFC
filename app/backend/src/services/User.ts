import UserModel from '../models/UserModel';
import ServiceError from '../errors/ServiceError';
import User from '../database/models/UsersModel';
import LoginDTO from '../dtos/LoginDTO';
import BCript from '../middlewares/BCrypt';

export default class LoginService {
  private _model = new UserModel();

  public findByData = async (loginDTO: LoginDTO): Promise<User> => {
    const { email, password } = loginDTO.getData();
    const user = await this._model.getByEmail(email);

    if (!user || !BCript.validate(password, user.password)) throw ServiceError.incorrectLogin;

    return user;
  };

  public findById = async (userId: number): Promise<User> => {
    const user = await this._model.getById(userId);
    if (!user) throw ServiceError.userNotFound;
    return user;
  };
}
