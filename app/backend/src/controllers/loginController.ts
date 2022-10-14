import { Request, Response } from 'express';
import LoginService from '../services/User';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response): Promise<Response> => {
    const response = await this.loginService.login(req.body);
    return res.status(200).json({ token: response });
  };

  public validade = async (req: Request, res: Response): Promise<Response> =>
    res.status(200).json({ role: 'admin' });
}
