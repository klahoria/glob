const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_process_subscription_records', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pp_subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    payment_source_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_ar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    amount: {
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
    convenience_fee_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    convenience_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "In Percent"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0-payment intent , 1-pending, 2- success, 3-failed, 4-reversed, 5-decline, 6-Financed, 7 - ACH Payment Pending"
    },
    stripe_error: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    decline_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    payout_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1- standard 2- instant"
    },
    payout_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    instant_payout_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    payout_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    pp_fee_from_bus: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    payment_process_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    download_receipt_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_receipt: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    timezone_payment_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "date added according to timezone\t"
    },
    platform_transfer_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Actual payment date for subscription payment"
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
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    payment_link_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "IF 3d payment is failed, Then use this url or send this url to customer for payment"
    },
    language_preferred: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    payment_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: Web, 1: Android, 2: IOS"
    },
    api_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: Default, 1: First Payment By Business, 2: First Payment By Patient, 3: Reccuring Payment By Cron, 4: Advance Payment By Patient, 5: In-Active Payment By Patient, 6: Advance Payment By Admin, 7: In-Active Payment By Admin"
    },
    payment_by_scan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    transaction_fee_metrics_buss: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "Transaction fee metrics for the charge"
    },
    transaction_fee_metrics: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "Transaction fee metrics for the charge"
    }
  }, {
    sequelize,
    tableName: 'payment_process_subscription_records',
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
