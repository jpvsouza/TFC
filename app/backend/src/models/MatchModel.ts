import Match from '../database/models/MatchesModel';
import { matchIncudeTeams } from './FindOptions';

export default class MatchModel {
  private _sequelizeModel = Match;

  public getAll = async (): Promise<Match[]> => this._sequelizeModel.findAll(matchIncudeTeams);
}
