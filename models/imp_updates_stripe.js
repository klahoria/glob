const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imp_updates_stripe', {
    stripe_account_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'imp_updates_stripe',
    timestamps: false
  });
};
