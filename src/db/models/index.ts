import { Sequelize } from 'sequelize-typescript';
import config = require('../config/config');
import { User } from './user';

const dbOption = config[ process.env.NODE_ENV || 'development' ];

export const sequelize = new Sequelize({
  ...dbOption,
  models: [ User ],
});

export { User };
