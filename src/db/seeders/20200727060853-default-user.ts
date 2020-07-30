import { QueryInterface } from 'sequelize';
import { User } from '../models';

export const up = (queryInterface: QueryInterface, Sequelize) => {
  return User.create({ name: 'taro' });
};

export const down = (queryInterface, Sequelize) => {
  return User.destroy({ where: { name: 'taro' } });
};
