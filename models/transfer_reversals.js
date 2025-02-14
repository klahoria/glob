const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transfer_reversals', {
    trr_id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    transfer_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    balance_transaction: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    destination_payment_refund: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    source_refund: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transfer_reversals',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trr_id" },
        ]
      },
    ]
  });
};
