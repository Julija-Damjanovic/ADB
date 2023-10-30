'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
   await queryInterface.addColumn('Users','birth',{type: DataTypes.DATE});
 
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.removeColumn('Users','birth');
 
  
  }
};