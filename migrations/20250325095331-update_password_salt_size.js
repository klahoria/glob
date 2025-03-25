module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('doctor_profile', 'doctor_password', {
      type: Sequelize.STRING(256), // Expanding to store 512-bit hashes
      allowNull: true
    });

    await queryInterface.changeColumn('doctor_profile', 'password_salt', {
      type: Sequelize.STRING(256), // Expanding to store 512-bit salts
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('doctor_profile', 'doctor_password', {
      type: Sequelize.STRING(64), // Reverting back to 256-bit hashes
      allowNull: true
    });

    await queryInterface.changeColumn('doctor_profile', 'password_salt', {
      type: Sequelize.STRING(64), // Reverting back to 256-bit salts
      allowNull: true
    });
  }
};
