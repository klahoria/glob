const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ach_payments', {
    ach_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amount_deducted: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    pay_to_doctor: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    pay_to_partner: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    pay_to_denefits: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    collection_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    recovery_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    recovery_collection_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_fee: {
      type: DataTypes.DECIMAL(9,2),
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
    stripe_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    application_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    original_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    charged_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    principal_amount: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false,
      defaultValue: 0.0000
    },
    interest_amount: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: false,
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
    webhook_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0- pending 1- success 2-failed"
    },
    request_body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payment_from: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-admin 2 doctor 3 patient 4 enterprise 5 cron 6 request panel"
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
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    settlement_contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ach_payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ach_id" },
        ]
      },
      {
        name: "charge_id",
        using: "BTREE",
        fields: [
          { name: "charge_id" },
        ]
      },
      {
        name: "contract_id",
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
      {
        name: "doctor_id",
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
      {
        name: "payment_type",
        using: "BTREE",
        fields: [
          { name: "payment_type" },
          { name: "source_id" },
        ]
      },
      {
        name: "date_added",
        using: "BTREE",
        fields: [
          { name: "date_added" },
        ]
      },
      {
        name: "source_id",
        using: "BTREE",
        fields: [
          { name: "source_id" },
        ]
      },
    ]
  });
};
