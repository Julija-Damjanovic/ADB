'use strict';

/* @type {import('sequelize-cli').Migration} */

const bcrypt = require("bcryptjs");
module.exports = {
  async up (queryInterface, DataTypes) {
    const customerPass = await bcrypt.hash('lozinka', 10);
    let customers = [];
    for (let index = 0; index < 25; index++) {
      customers.push({
        username: `Korisnik${index + 1}`,
        password: customerPass,
        email: `korisnik${index + 1}@test.com`,
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('Customers', customers, {});
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};
