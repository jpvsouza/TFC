import TeamStatus from '../dtos/TeamStatus';
import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';

class LeaderboardService {
  private _teamModel = new TeamModel();
  private _matchModel = new MatchModel();

  public getResults = async (): Promise<TeamStatus[]> => {
    const teams = await this._teamModel.getAll();
    const matches = await this._matchModel.getAll();

    return teams.map((team) =>
      new TeamStatus(team, matches.filter((match) => !match.inProgress)));
  };

  public getHomeResults = async (): Promise<TeamStatus[]> => {
    const teams = await this._teamModel.getAll();
    const matches = await this._matchModel.getAll();

    return teams
      .map((team) => new TeamStatus(
        team,
        matches
          .filter((match) => !match.inProgress)
          .filter((match) => match.homeTeam === team.id),
      ));
  };

  public getAwayResults = async (): Promise<TeamStatus[]> => {
    const teams = await this._teamModel.getAll();
    const matches = await this._matchModel.getAll();

    return teams
      .map((team) => new TeamStatus(
        team,
        matches
          .filter((match) => !match.inProgress)
          .filter((match) => match.awayTeam === team.id),
      ));
  };
}

export default LeaderboardService;
