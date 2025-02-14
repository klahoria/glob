const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_verification', {
    partner_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    verification_status: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    debit_negative_balances: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    payouts_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    account_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pending_verfication: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fields_needed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    due_by: {
      type: DataTypes.DATE,
      allowNull: true
    },
    disabled_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    details_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    details: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'partner_verification',
    timestamps: false,
    indexes: [
      {
        name: "partner_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "partner_id" },
        ]
      },
    ]
  });
};
