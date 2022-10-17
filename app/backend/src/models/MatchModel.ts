import { MatchGoalsAttributes } from '../@types';
import Match from '../database/models/MatchesModel';
import { matchIncudeTeams } from './FindOptions';
import IMatch from '../interfaces/IMatch';

export default class MatchModel {
  private _sequelizeModel = Match;

  public getAll = async (): Promise<Match[]> => this._sequelizeModel.findAll(matchIncudeTeams);

  public getById = async (id: number): Promise<Match | null> => this._sequelizeModel.findByPk(id);

  public create = async (match: IMatch): Promise<Match> => this._sequelizeModel.create(match);

  public finishMatch = async (id: number) =>
    this._sequelizeModel.update({ inProgress: false }, { where: { id } });

  public updateGoals = async (id: number, goals: MatchGoalsAttributes) => {
    this._sequelizeModel.update({ ...goals }, { where: { id } });
  };
}
