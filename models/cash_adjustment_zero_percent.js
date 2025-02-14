const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cash_adjustment_zero_percent', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amount_deducted: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    amount_refunded: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    payment_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 6
    },
    inactive_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    transaction_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'cash_adjustment_zero_percent',
    timestamps: false,
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
