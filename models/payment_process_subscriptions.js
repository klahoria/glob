const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_process_subscriptions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    setup_intent_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pp_subscription_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1: PP Payment Without 3d from enterprise panel, 2: PP Payment With 3d from enterprise panel, 3: PP Payment Without 3d from request panel, 4: PP Payment With 3d from request panel "
    },
    pp_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: One Time, 1: Recurring"
    },
    is_show: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    service_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    discount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    convenience_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "in percentage"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    doctor_transaction_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    patient_transaction_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    payment_source_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    process_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 3.00
    },
    process_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    process_threshold_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 3.00
    },
    process_threshold_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.25
    },
    process_threshold_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    service_record: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    payout_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1- standard 2- instant"
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    recurring_source_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    backup_source_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "default_instant_card_id"
    },
    is_three_d_secure: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    pp_bus_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    pp_bus_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 2.00
    },
    pp_bus_threshold_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    pp_bus_threshold_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    pp_bus_threshold_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 2.00
    },
    instant_payout_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    payout_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "(0-payment intent , 1-pending, 2- success, 3-failed, 4-reversed, 5-decline, 6-Financed, 7 - ACH Payment Pending) (Only For Request Panel)"
    },
    customer_signature: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_timezone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "+530"
    },
    payment_schedule: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: None, 1: Monthly, 2: Yearly"
    },
    total_terms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    remaining_terms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    show_process_payment: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    pp_restricted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    show_ar_reason_to_customer: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    stripe_metadata: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    stripe_customer_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    card_token: {
      type: DataTypes.STRING(100),
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
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    patient_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    patient_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    alternate_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alternate_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    payment_link_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_ar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_reminder_payment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    settlement_contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    language_preferred: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    cancel_request: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No request, 1: Request sent by customer, status: pending, 2: Request accept by admin\/business, 3: Request cancel by admin\/business"
    },
    cancel_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    csr_request_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "If customer send cancel request then a ticket generated with csr_request_id in csr_requests table"
    },
    cancel_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: Default, 1: Patient, 2: Doctor, 3: Admin"
    },
    show_transaction_fee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes (Used only for recurring subscription))"
    },
    is_pp_subscription_verified: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    transaction_fee_metrics_array: {
      type: DataTypes.JSON,
      allowNull: true
    },
    transaction_fee_metrics_buss: {
      type: DataTypes.JSON,
      allowNull: true
    },
    default_payment_source_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3
    }
  }, {
    sequelize,
    tableName: 'payment_process_subscriptions',
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
