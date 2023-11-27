'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('blackListedTokens', {
      token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Tokens should be unique in the blacklist
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    });
  },

  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('blackListedTokens');
  }
};