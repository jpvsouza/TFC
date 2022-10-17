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
}
