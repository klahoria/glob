const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('balance_transactions', {
    transaction_id: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: false,
      defaultValue: 0.00
    },
    available_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    net: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    currency: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "usd"
    },
    exchange_rate: {
      type: DataTypes.DECIMAL(9,4),
      allowNull: true,
      defaultValue: 1.0000
    },
    source: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    reporting_category: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    stripe_account_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    payout_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ppr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    payment_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'balance_transactions',
    timestamps: false,
    indexes: [
      {
        name: "transaction_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transaction_id" },
          { name: "type" },
        ]
      },
      {
        name: "source",
        using: "BTREE",
        fields: [
          { name: "source" },
        ]
      },
    ]
  });
};
