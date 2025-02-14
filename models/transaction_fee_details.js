const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction_fee_details', {
    transaction_id: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    type: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(254),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaction_fee_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transaction_id" },
          { name: "type" },
        ]
      },
    ]
  });
};
