const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_process_record', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_ar: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Payment Processing 1- Account Recieveables"
    },
    pp_subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    settlement_contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_reminder_payment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_three_d_secure: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1- 3d secure 0 -not"
    },
    payment_process_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    patient_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    patient_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    alternate_email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    alternate_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    downpayment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
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
    pp_fee_from_bus: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    payout_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_ez_percentage: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_ez_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_ez_discount_denefits_share_percent: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    service_record: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    months_array: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "if also choosen plan"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0-payment intent , 1-pending, 2- success, 3-failed, 4-reversed, 5-decline, 6-Financed, 7 - ACH Payment Pending"
    },
    payment_source_type: {
      type: DataTypes.TINYINT,
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
    process_threshold_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    process_threshold_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.25
    },
    process_threshold_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 3.00
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
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
    stripe_error: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    decline_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    stripe_metadata: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    payment_link_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    inactive_fee: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false
    },
    download_receipt_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_receipt: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    payout_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    payout_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1- standard 2- instant"
    },
    card_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    instant_payout_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1- deleted 0 - not deleted"
    },
    platform_transfer_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "request logs id"
    },
    customer_signature: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    timezone_payment_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "date added according to timezone"
    },
    user_timezone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "+5 30"
    },
    verification_token: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "verification token for self verification"
    },
    verification_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1(link not opened) 2(link opened) 3(verification done) 4(Password updated)"
    },
    verified_using: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "The details using which the customer got verified"
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    language_preferred: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    transaction_fee_metrics_array: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "Transaction fee metrics for each payment source type"
    },
    transaction_fee_metrics_array_buss: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "Transaction fee metrics for each payment source type for businesses"
    }
  }, {
    sequelize,
    tableName: 'payment_process_record',
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
      {
        name: "doctor_id",
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
      {
        name: "payment_link_token",
        using: "BTREE",
        fields: [
          { name: "payment_link_token" },
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
        name: "charge_id",
        using: "BTREE",
        fields: [
          { name: "charge_id" },
        ]
      },
      {
        name: "payment_record_idx_payment_token_status",
        using: "BTREE",
        fields: [
          { name: "payment_link_token" },
          { name: "status" },
        ]
      },
    ]
  });
};
