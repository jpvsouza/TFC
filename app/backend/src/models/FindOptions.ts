import { FindOptions } from 'sequelize';
import Team from '../database/models/Team';

// Option para busca do sequelize excluindo o campo ID e renomeando o campo de nome
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
