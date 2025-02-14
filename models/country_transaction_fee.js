const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country_transaction_fee', {
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country_code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    recurring_extra_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 3.00
    },
    recurring_extra_percent: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    threshold_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 100.00
    },
    threshold_recurring_extra_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    threshold_recurring_extra_percent: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 3.00
    }
  }, {
    sequelize,
    tableName: 'country_transaction_fee',
    timestamps: false,
    indexes: [
      {
        name: "country_id",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};
