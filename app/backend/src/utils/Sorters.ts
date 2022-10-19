import { LeaderboardProperties } from '../@types';

export const leaderboardSorter = (a: LeaderboardProperties, b: LeaderboardProperties) => {
  const pointsDiff = b.totalPoints - a.totalPoints;
  const victoriesDiff = b.totalVictories - a.totalVictories;
  const balanceDiff = b.goalsBalance - a.goalsBalance;
  const favorDiff = b.goalsFavor - a.goalsFavor;
  const ownDiff = b.goalsOwn - a.goalsOwn;

  if (pointsDiff !== 0) return pointsDiff;
  if (victoriesDiff !== 0) return victoriesDiff;
  if (balanceDiff !== 0) return balanceDiff;
  if (favorDiff !== 0) return favorDiff;

  return ownDiff;
};

export default {
  leaderboardSorter,
};
