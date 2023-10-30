'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Products', 'future_day', {
          type: DataTypes.BOOLEAN,
        }, { transaction: t }),
        queryInterface.addColumn('Products', 'individualy_packaged', {
          type: DataTypes.BOOLEAN,
        }, { transaction: t }),
        queryInterface.addColumn('Products', 'min_order_ammount', {
          type: DataTypes.INTEGER,
        }, { transaction: t }),
      ]);
    });

  },
  async down(queryInterface, DataTypes) {
 
  }
};