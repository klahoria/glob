const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('all_patient_plans', {
    enroll_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    dp_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    number_of_payments: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 12
    },
    recurring_amount: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remaining_payments: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 12
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_primary: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    is_active: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    date_enrolled: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'all_patient_plans',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "enroll_id" },
        ]
      },
    ]
  });
};
