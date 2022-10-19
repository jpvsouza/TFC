import UserModel from '../models/UserModel';
import ServiceError from '../errors/ServiceError';
import User from '../database/models/User';
import LoginDTO from '../dtos/LoginDTO';
import BCrypt from '../utils/BCrypt';
import { validateToken } from '../utils/generateToken';
import ValidationError from '../errors/ValitationError';

interface ILogin {
  id?: number;
  email: string;
  password: string;
  role?: string;
}

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

  public validateEntries = async (token: string): Promise<ILogin> => {
    if (token) {
      const { id } = validateToken(token);
      const result = await this._model.findByPk(id);

      return result as ILogin;
    }

    throw ValidationError.tokenNotFound;
  };

  public async userValidator(id: number) {
    console.log('Isso aqui é o que tá chegando de id', id);
    const user = await this._model.findByPk(id);
    console.log('Isso aqui é o que tá chegando de user', user);

    if (!user) throw new Error('User not found');

    return { role: user.role };
  }
}

export default UserService;
