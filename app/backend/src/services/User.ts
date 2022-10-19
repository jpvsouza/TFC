import UserModel from '../models/UserModel';
import ServiceError from '../errors/ServiceError';
import User from '../database/models/User';
import LoginDTO from '../dtos/LoginDTO';
import BCrypt from '../utils/BCrypt';

class UserService {
  private _model = new UserModel();

  public findByCredentials = async (loginDTO: LoginDTO): Promise<User> => {
    const { email, password } = loginDTO.getData();
    const user = await this._model.findByEmail(email);

    if (!user || !BCrypt.validate(password, user.password)) throw ServiceError.incorrectLogin;

    return user;
  };

  public findByPk = async (userId: number): Promise<User> => {
    const user = await this._model.findByPk(userId);
    if (!user) throw ServiceError.userNotFound;
    return user;
  };
}

export default UserService;
