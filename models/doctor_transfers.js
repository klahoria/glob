const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_transfers', {
    transfer_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    source_transaction: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    balance_transaction: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    amount_reversed: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    payout_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    transfer_group: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    reversed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    destination_payment: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    payment_refund_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    pf_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    payment_type: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    retry_payout_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'doctor_transfers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transfer_id" },
        ]
      },
      {
        name: "charge_id",
        using: "BTREE",
        fields: [
          { name: "charge_id" },
        ]
      },
      {
        name: "transfer_id",
        using: "BTREE",
        fields: [
          { name: "transfer_id" },
        ]
      },
      {
        name: "payment_refund_id",
        using: "BTREE",
        fields: [
          { name: "payment_refund_id" },
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
