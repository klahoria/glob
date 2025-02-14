const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stripe_transfers', {
    transfer_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    source_transaction: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    transfered_to: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    created: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stripe_transfers',
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
