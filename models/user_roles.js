const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_roles', {
    roles: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    add_roles: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    add_user: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    latest: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    dashboard: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    doctors: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    partners: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    patients: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    contracts: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    rewards: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    payments: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    latest_payments: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    latest_charges: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    latest_transfers: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    latest_payouts: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    contracts_overdue_payments: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    contracts_finance_contracts: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    contracts_disputed_payments: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    rewards_manage_cashbacks: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    rewards_sent_cheques: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'user_roles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "roles" },
        ]
      },
    ]
  });
};
