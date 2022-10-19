export type ModelAttributes = {
  id: number;
};

export type JwtPayload = {
  id: string;
};

export type TeamAttributes = ModelAttributes & {
  teamName: string;
};

export type LoginAttributes = {
  email: string;
  password: string;
};

export type UserAttributes = ModelAttributes & LoginAttributes & {
  username: string;
  role: string;
};

export type MatchGoalsAttributes = {
  homeTeamGoals: number;
  awayTeamGoals: number;
};

export type MatchAttributes = ModelAttributes & MatchGoalsAttributes & {
  homeTeam: number;
  awayTeam: number;
  inProgress: number;
};

export type LeaderboardProperties = {
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
