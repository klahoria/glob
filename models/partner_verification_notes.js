const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_verification_notes', {
    partner_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    note: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    account_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'partner_verification_notes',
    timestamps: false
  });
};
