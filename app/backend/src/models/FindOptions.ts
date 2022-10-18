import { FindOptions } from 'sequelize';
import Team from '../database/models/Team';

export const matchIncludeTeams: FindOptions = {
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

export default {
  matchIncludeTeams,
};
