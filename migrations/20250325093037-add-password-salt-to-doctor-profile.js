'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('doctor_profile', 'password_salt', {
      type: Sequelize.STRING(256), // Adjust the length as needed
      allowNull: false,
      after: 'doctor_password' // Places the new column after 'doctor_password'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('doctor_profile', 'password_salt');
  }
};
