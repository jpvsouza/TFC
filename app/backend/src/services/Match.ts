import { MatchGoalsAttributes } from '../@types';
import IMatch from '../interfaces/IMatch';
import ServiceError from '../errors/ServiceError';
import Match from '../database/models/MatchesModel';
import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';

export default class MatchService {
  private _matchModel = new MatchModel();
  private _teamModel = new TeamModel();

  public getAll = async (): Promise<Match[]> => this._matchModel.getAll();

  public create = async (match: IMatch) => {
    const dataTeams = [match.awayTeam, match.homeTeam];

    const teams = await this._teamModel.getAllWithIds(dataTeams);

    if (dataTeams[0] === dataTeams[1]) throw ServiceError.repeatedTeams;

    if (teams.length !== dataTeams.length) throw ServiceError.teamNotFound;

    const created = await this._matchModel.create(match);
    return created;
  };

  public finishMatch = async (id: number) => {
    const match = this._matchModel.getById(id);
    if (!match) throw ServiceError.matchNotFound;
    await this._matchModel.finishMatch(id);
  };

  public updateGoals = async (id: number, goals: MatchGoalsAttributes) => {
    const match = await this._matchModel.getById(id);
    if (!match) throw ServiceError.matchNotFound;
    await this._matchModel.updateGoals(id, goals);
  };
}
