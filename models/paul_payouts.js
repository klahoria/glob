const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paul_payouts', {
    py_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    payout_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: "payout_id"
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(20),
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
    arrival_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_refreshed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'paul_payouts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "py_id" },
        ]
      },
      {
        name: "payout_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payout_id" },
        ]
      },
    ]
  });
};
