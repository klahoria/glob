const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_payments', {
    dopa_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "(-) represent doc source"
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    amount_deducted: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    number_of_installments: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    pay_to_doctor: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    pay_to_partner: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "just experiment"
    },
    pay_to_denefits: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "In case of payment type 13 recovery amount"
    },
    recovery_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    recovery_collection_fee: {
      type: DataTypes.FLOAT(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    collection_fee: {
      type: DataTypes.FLOAT(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "in ar contract only"
    },
    ar_discount_save_share: {
      type: DataTypes.DOUBLE(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    actual_collection_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    inactive_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    payout_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    transaction_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    late_fee: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    late_fee_refunded: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    pay_to_doctor_late_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00,
      comment: "Share of late fee to business"
    },
    stripe_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "17-ach payments, 20-first recurring failed for in house, 26: Without business bank payments for AR"
    },
    stripe_fee: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    application_fee: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    payout_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    refunded_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    original_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    charged_amount: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: false,
      defaultValue: 0.000
    },
    amount_reversed: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    req_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notes: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "On refunding the comment is added here"
    },
    principal_amount: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    interest_amount: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    interest_amount2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    principal_amount2: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    customer_pt_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    business_pt_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    show_to_customer: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_amount_deducted: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    guarantee_percent: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 0.00
    },
    edit_recurring_fee: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    business_percent: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 0.00
    },
    min_change_payment_date_denefits_share: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    reported_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Cool Credit"
    },
    reported_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Cool Credit 0-pending 1-positive 2-negative"
    },
    is_urgent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    transaction_fee_metrics: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "Transaction fee metrics for the charge"
    }
  }, {
    sequelize,
    tableName: 'doctor_payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dopa_id" },
        ]
      },
      {
        name: "con",
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
      {
        name: "doc",
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
      {
        name: "charge-id",
        using: "BTREE",
        fields: [
          { name: "charge_id", length: 25 },
        ]
      },
    ]
  });
};
