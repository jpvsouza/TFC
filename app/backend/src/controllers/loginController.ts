// import { Request, Response } from 'express';
// import LoginService from '../services/User';

// export default class LoginController {
//   constructor(private loginService = new LoginService()) {}

//   public login = async (req: Request, res: Response): Promise<Response> => {
//     const response = await this.loginService.login(req.body);
//     return res.status(200).json({ token: response });
//   };

//   public validade = async (req: Request, res: Response): Promise<Response> =>
//     res.status(200).json({ role: 'admin' });
// }

import { RequestHandler } from 'express';
import Token from '../middlewares/Token';
import { LoginAttributes } from '../@types';
import LoginDTO from '../dtos/LoginDTO';
import LoginService from '../services/User';

export default class LoginController {
  private _service = new LoginService();

  public login: RequestHandler = async (req, res) => {
    const loginDTO = new LoginDTO(req.body as LoginAttributes);
    const user = await this._service.findByData(loginDTO);
    const token = Token.create(user.id);
    return res.status(200).json(token);
  };

  public validate: RequestHandler = async (req, res) => {
    const { headers: userId } = req;
    const { role } = await this._service.findById(Number(userId));
    res.status(200).json({ role });
  };
}
