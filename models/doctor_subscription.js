const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_subscription', {
    ds_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    plan_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    amount_paid: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    monthly_price: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 20.00
    },
    transaction_id: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    paid_for_months: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: -1
    },
    customer_id: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    last4: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    brand: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    card_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    next_pay_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    next_paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    one_year_validity: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    transacted_on: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'doctor_subscription',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ds_id" },
        ]
      },
    ]
  });
};
