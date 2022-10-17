import Match from '../database/models/MatchesModel';
import { matchIncudeTeams } from './FindOptions';
import IMatch from '../interfaces/IMatch';

export default class MatchModel {
  private _sequelizeModel = Match;

  public getAll = async (): Promise<Match[]> => this._sequelizeModel.findAll(matchIncudeTeams);

  public getById = async (id: number): Promise<Match | null> => this._sequelizeModel.findByPk(id);

  public create = async (match: IMatch): Promise<Match> => this._sequelizeModel.create(match);
}
