// import IMatch from '../interfaces/IMatch';
import Match from '../database/models/MatchesModel';
import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';

export default class MatchService {
  private _matchModel = new MatchModel();
  private _teamModel = new TeamModel();

  public getAll = async (): Promise<Match[]> => this._matchModel.getAll();

  // public create = async (match: IMatch) => {
  //   const dataTeams = [match.awayTeam, match.homeTeam];

  //   const teams = await this._teamModel.getAllWithIds(dataTeams);
  // };
}
