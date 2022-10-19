import { LeaderboardProperties } from '../@types';
import Team from '../database/models/Team';
import Match from '../database/models/Match';

export default class TeamStatus {
  private _team: Team;
  private _playedMatches: Match[];
  private _victories = 0;
  private _draws = 0;
  private _losses = 0;
  private _goalsFavor = 0;
  private _goalsOwn = 0;
  private _totalPoints = 0;
  private _totalGames = 0;

  constructor(team: Team, finishedMatches: Match[]) {
    this._team = team;
    this._playedMatches = finishedMatches.filter((match) =>
      match.homeTeam === team.id || match.awayTeam === team.id);

    this._playedMatches.forEach(this.getIndividualMatchResult);

    this.getTotalGoals();

    this._totalGames = this._victories + this._draws + this._losses;
    this._totalPoints = (this._victories * 3) + this._draws;
  }

  private getIndividualMatchResult = (match: Match): void => {
    const { id } = this._team;
    const { homeTeam, homeTeamGoals, awayTeamGoals } = match;
    const teamGoals = homeTeam === id ? homeTeamGoals : awayTeamGoals;
    const opponentGoals = homeTeam === id ? awayTeamGoals : homeTeamGoals;

    if (teamGoals > opponentGoals) this._victories += 1;
    else if (teamGoals < opponentGoals) this._losses += 1;
    else this._draws += 1;
  };

  private getTotalGoals = (): void => this._playedMatches.forEach((match) => {
    const { id } = this._team;
    const { homeTeam, homeTeamGoals, awayTeamGoals } = match;
    this._goalsFavor += homeTeam === id ? homeTeamGoals : awayTeamGoals;
    this._goalsOwn += homeTeam === id ? awayTeamGoals : homeTeamGoals;
  });

  public getCalculatedStatus = (): LeaderboardProperties => ({
    name: this._team.teamName,
    totalPoints: this._totalPoints,
    totalGames: this._totalGames,
    totalVictories: this._victories,
    totalDraws: this._draws,
    totalLosses: this._losses,
    goalsFavor: this._goalsFavor,
    goalsOwn: this._goalsOwn,
    goalsBalance: this._goalsFavor - this._goalsOwn,
    efficiency: ((this._totalPoints / (this._totalGames * 3)) * 100).toFixed(2),
  });
}
