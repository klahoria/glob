const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('charge_generic_decline_error', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    charge_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charge_outcome: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    charge_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-pending, 1-payment recovered, 2 Ignore"
    },
    email_sent_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    last_email_sent: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'charge_generic_decline_error',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
