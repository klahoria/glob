const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ar_plans', {
    ap_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_pp: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "payment processing option is enabled"
    },
    is_plan: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "finance using plan"
    },
    patient_name: {
      type: DataTypes.STRING(200),
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
    treatment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    downpayment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    minimum_months: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    maximum_months: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    specific_month: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payment_link_token: {
      type: DataTypes.STRING(255),
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
    months_array: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "months comma saprated"
    },
    error_text: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "if there is any error while uploading"
    },
    req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "request logs id"
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1- deleted 0 - not deleted"
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
    tableName: 'ar_plans',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ap_id" },
        ]
      },
      {
        name: "doctor_id",
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
    ]
  });
};
