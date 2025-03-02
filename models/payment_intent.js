const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_intent', {
    payment_intent_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    stripe_intent_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    three_d_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0:normal card,1:3ds card"
    },
    payment_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 4
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
    upi_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1: apple pay, 2: gPay"
    },
    app_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 3,
      comment: "0=webpanel,1=android,2=ios,3=request_panel"
    },
    amount_deducted: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
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
      allowNull: false
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
      defaultValue: 0.00
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
      defaultValue: 0
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
      type: DataTypes.FLOAT,
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
    }
  }, {
    sequelize,
    tableName: 'payment_intent',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_intent_id" },
        ]
      },
      {
        name: "contract_id",
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
    ]
  });
};
