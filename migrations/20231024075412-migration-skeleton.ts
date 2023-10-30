'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Attachemt', {
      is_active: DataTypes.BOOLEAN,
      file_name: {
        type:DataTypes.STRING,
        allowNull:false,
      },
      belongs_to: DataTypes.ENUM('Customer','Product','Maker','Reward','User','ProductSlide'),
      foreign_key: DataTypes.INTEGER, 
    });

 
    


  },
  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Attachemt');
  }
};
