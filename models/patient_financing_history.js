const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_financing_history', {
    history_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    one_paid_to_denefits: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    treatment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    financed_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    recurring_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    one_dollar_interest: {
      type: DataTypes.DECIMAL(9,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "one $ interest on financed amount"
    },
    interest_rate: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "interest rate on contract"
    },
    interest_rate_to_show: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true,
      defaultValue: 0.00
    },
    principal_per_recurring: {
      type: DataTypes.DECIMAL(9,4),
      allowNull: false,
      defaultValue: 0.0000
    },
    interest_per_recurring: {
      type: DataTypes.DECIMAL(9,4),
      allowNull: false,
      defaultValue: 0.0000
    },
    downpayment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    next_missing_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    number_of_payments: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    remaining_payments: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    pf_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "1-active (no recurring payment) 2-active (first recurring done) 3-overdue 4-completed 5-cancelled"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "comment while updating contract"
    },
    contract_edited_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0-doctor, >0 having admin_id, -1 customer"
    },
    req_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'patient_financing_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "history_id" },
        ]
      },
    ]
  });
};
