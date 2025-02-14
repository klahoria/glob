const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unmatched_payouts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    payout_id: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fee: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    automatic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    balance_transaction: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    failure_balance_transaction: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    failure_code: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    failure_message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'unmatched_payouts',
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
      {
        name: "payout_id",
        using: "BTREE",
        fields: [
          { name: "payout_id" },
        ]
      },
    ]
  });
};
