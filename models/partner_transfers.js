const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_transfers', {
    transfer_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
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
      allowNull: false
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'partner_transfers',
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
    ]
  });
};
