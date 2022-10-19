import { RequestHandler } from 'express';
import Token from '../utils/Token';
import { LoginAttributes } from '../@types';
import LoginDTO from '../dtos/LoginDTO';
import UserService from '../services/UserService';

export default class UserController {
  private _service = new UserService();

  public login: RequestHandler = async (req, res) => {
    const loginDTO = new LoginDTO(req.body as LoginAttributes);
    const user = await this._service.getByEmail(loginDTO);

    // Cria um token usando os dados do usuário
    const token = Token.create(user.id);
    return res.status(200).json({ token });
  };

  public validateUser: RequestHandler = async (req, res) => {
    const { headers: { userId } } = req;

    // Identifica o tipo de usuário (admin ou não)
    const { role } = await this._service.getById(Number(userId));
    res.status(200).json({ role });
  };
}
