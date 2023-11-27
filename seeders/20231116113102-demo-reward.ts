'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Rewards', [{
      is_active: true,
      stamp_ammount_needed: 1000,
      max_use_ammount: 1000,
      expires: "2023-11-22 10:45:00",
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});


  },

  async down(queryInterface, DataTypes) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Rewards',null,{});
  }
};
