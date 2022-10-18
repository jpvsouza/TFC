import { LeaderBoardProperties } from '../@types';

export const leaderboardSorter = (a: LeaderBoardProperties, b: LeaderBoardProperties) => {
  const pointsDifference = b.totalPoints - a.totalPoints;
  const victoriesDifference = b.totalVictories - a.totalVictories;
  const balanceDifference = b.goalsBalance - a.goalsBalance;
  const favorDifference = b.goalsFavor - a.goalsFavor;
  const ownDifference = b.goalsOwn - a.goalsOwn;

  if (pointsDifference !== 0) return pointsDifference;
  if (victoriesDifference !== 0) return victoriesDifference;
  if (balanceDifference !== 0) return balanceDifference;
  if (favorDifference !== 0) return favorDifference;

  return ownDifference;
};

export default { leaderboardSorter };
