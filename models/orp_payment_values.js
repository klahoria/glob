const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orp_payment_values', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dopa_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pay_to_doctor: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    inactive_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    payout_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    collection_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    payment_type: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orp_payment_values',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
