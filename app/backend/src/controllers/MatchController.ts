import { RequestHandler } from 'express';
import MatchService from '../services/Match';

export default class MatchController {
  private _service = new MatchService();

  public getAll: RequestHandler = async (req, res) => {
    const {
      query: { inProgress },
    } = req;
    const matches = await this._service.getAll();
    res
      .status(200)
      .json(
        inProgress
          ? matches.filter((match) => (inProgress === 'true') === match.inProgress)
          : matches,
      );
  };
}
