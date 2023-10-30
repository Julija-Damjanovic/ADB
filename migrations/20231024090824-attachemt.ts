'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Attachemt', 'name', {
          type: DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('Attachemt', 'favorite', {
          type: DataTypes.STRING,
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Attachemt', 'name', { transaction: t }),
        queryInterface.removeColumn('Attachemt', 'favorite', { transaction: t })
      ]);
    });
  }
};