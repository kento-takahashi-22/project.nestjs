import { QueryInterface } from 'sequelize';

const tableName = 'Users';

export const up = (queryInterface: QueryInterface, Sequelize) => {

  return queryInterface.createTable(tableName, {

    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },

    name: {
      allowNull: false,
      defaultValue: '',
      type: Sequelize.STRING
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('NOW'),
    },
  });

};

export const down = (queryInterface, Sequelize) => {
  return queryInterface.dropTable(tableName);
};
