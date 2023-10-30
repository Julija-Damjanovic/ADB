'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {

      await queryInterface.bulkInsert('Products', [{
        is_active: false,
        name: 'jaffa', 
        same_day: true,
        future_day: true,
        individualy_packaged: true,
        price: 20.0,
        min_order_ammount: 5, 
        description: 'sweet',
        createdAt: new Date(),
        updatedAt: new Date()
        
      }], {});
    
  },

  async down (queryInterface, DataTypes) {
    
      await queryInterface.bulkDelete('Products', null, {});
  }
};
