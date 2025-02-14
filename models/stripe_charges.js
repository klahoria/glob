const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stripe_charges', {
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    balance_transaction: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    amount_refunded: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    application_fee: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    refunded: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dispute: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    source_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    transfer_group: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transfer: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payment_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    last4: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    card_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_refreshed: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stripe_charges',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "charge_id" },
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
        name: "contract_id",
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
    ]
  });
};
