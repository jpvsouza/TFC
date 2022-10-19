import { RequestHandler, Request, Response } from 'express';
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

  // public validate: RequestHandler = async (req, res) => {
  //   const { headers: { userId } } = req;
  //   const { role } = await this._service.findByPk(Number(userId));
  //   res.status(200).json({ role });
  // };

  // public validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     let { authorization } = req.headers;

  //     if (!authorization) {
  //       authorization = '';
  //     }

  //     const { role } = await this._service.validateEntries(authorization);

  //     return res.status(200).json({ role });
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  public validateLogin = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    console.log('Isso aqui é o que tá chegando de authorization', authorization);

    if (!authorization) return res.status(401).json({ message: 'Unauthorized' });

    const user = Token.decodeUser(authorization);
    console.log('Isso aqui é o que tá chegando de user', user);

    try {
      const role = await this._service.userValidator(user.id);
      return res.status(200).json(role);
    } catch (err) {
      return res.status(404).json({ message: 'User not found' });
    }
  };
}

export default UserController;
