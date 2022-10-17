// import IMatch from '../interfaces/IMatch';
import Match from '../database/models/MatchesModel';
import MatchModel from '../models/MatchModel';

export default class MatchService {
  private _matchModel = new MatchModel();
  // private _teamModel = new TeamModel();

  public getAll = async (): Promise<Match[]> => this._matchModel.getAll();
}
