import { RequestHandler } from 'express';
import Token from '../utils/Token';
import { LoginAttributes } from '../@types';
import LoginDTO from '../dtos/LoginDTO';
import UserService from '../services/User';

class UserController {
  private _service = new UserService();

  public login: RequestHandler = async (req, res) => {
    const loginDTO = new LoginDTO(req.body as LoginAttributes);
    const user = await this._service.findByCredentials(loginDTO);
    const token = Token.create(user.id);
    return res.status(200).json({ token });
  };

  public validate: RequestHandler = async (req, res) => {
    const { headers: { userId } } = req;
    const { role } = await this._service.findByPk(Number(userId));
    res.status(200).json({ role });
  };
}

export default UserController;
