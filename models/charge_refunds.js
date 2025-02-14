const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('charge_refunds', {
    re_id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    balance_transaction: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    transfer_reversal: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    source_transfer_reversal: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'charge_refunds',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "re_id" },
        ]
      },
    ]
  });
};
