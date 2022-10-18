export type MatchGoalsAttributes = {
  homeTeamGoals: number;
  awayTeamGoals: number;
};

export type ModelAttributes = {
  id: number;
};

export type MatchAttributes = ModelAttributes & MatchGoalsAttributes & {
  homeTeam: number;
  awayTeam: number;
};

export type JwtPayload = {
  id: string;
};

export type LoginAttributes = {
  email: string;
  password: string;
};

export type LeaderBoardProperties = {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string,
};
