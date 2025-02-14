const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_pay_subscription', {
    dps_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    amount_paid: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true,
      defaultValue: 0.00
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    error: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    is_error: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    date_paid: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'doctor_pay_subscription',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dps_id" },
        ]
      },
    ]
  });
};
