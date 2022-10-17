import { FindOptions } from 'sequelize';
import Team from '../database/models/TeamsModel';

export const matchIncudeTeams: FindOptions = {
  include: [
    {
      model: Team,
      as: 'teamHome',
      attributes: { exclude: ['id'] },
    },
    {
      model: Team,
      as: 'teamAway',
      attributes: { exclude: ['id'] },
    },
  ],
};

export default { matchIncudeTeams };
