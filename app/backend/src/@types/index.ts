export type MatchGoalsAttributes = {
  homeTeamGoals: number;
  awayTeamGoals: number;
};

export type ModelAttributes = {
  id: number;
};

export type MatchAttributes = ModelAttributes & MatchGoalsAttributes & {
  homeTeamGoals: number;
  awayTeamGoals: number;
};

export type JwtPayload = {
  id: string;
};
