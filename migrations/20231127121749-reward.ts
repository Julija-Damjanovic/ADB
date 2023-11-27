'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Rewards', 'MakerId', {
          type: DataTypes.INTEGER,
          references: {model: 'Makers',key:'id'}
          
        }, { transaction: t }),
        queryInterface.addColumn('Rewards', 'DiscountId', {
          type: DataTypes.INTEGER,
          references: {model: 'Discounts',key:'id'}
        }, { transaction: t })
      ]);
    });

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
