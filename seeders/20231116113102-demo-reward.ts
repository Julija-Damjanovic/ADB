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
      expires: "2025-11-22 10:45:00",
      createdAt: new Date(),
      updatedAt: new Date(),
      MakerId:1,
      DiscountId: 8,

    },{
      is_active: true,
      stamp_ammount_needed: 1500,
      max_use_ammount: 1500,
      expires: "2025-11-22 10:45:00",
      createdAt: new Date(),
      updatedAt: new Date(),
      MakerId:2,
      DiscountId: 8,
    },
  {
    is_active: true,
    stamp_ammount_needed: 5000,
    max_use_ammount: 5000,
    expires: "2026-11-22 10:45:00",
    createdAt: new Date(),
    updatedAt: new Date(),
    MakerId:3,
    DiscountId: 7,
  },
{
  is_active: false,
  stamp_ammount_needed: 2000,
  max_use_ammount: 2000,
  expires: "2024-11-22 10:45:00",
  createdAt: new Date(),
  updatedAt: new Date(),
  MakerId:4,
  DiscountId: 7,
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
