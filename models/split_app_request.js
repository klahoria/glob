const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('split_app_request', {
    split_req_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    apf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contract_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "'1 -->> 10% Financing, 2 -->> No Fee Financing(0%), 3 -->> InHouse, 4 -->> EZ financing 5-->> AR EZ"
    },
    title: {
      type: DataTypes.ENUM('','Dr.','Mr.','Ms.','Mrs.','Miss.'),
      allowNull: true,
      defaultValue: ""
    },
    patient_first_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    patient_last_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    patient_email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    patient_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    patient_ssn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    next_payment_start_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "next payment date range for customer"
    },
    next_payment_end_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "next payment date range for customer"
    },
    next_payment_buffer_days: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Number of days customer will get to select next payment date"
    },
    request_from: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0- Doctor panel, 1-last step of financing,2-open API"
    },
    downpayment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    treatment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    interest_rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    months_array: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "months comma saprated"
    },
    plans_array: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contract_service_record: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    doctor_record_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    payment_matrix: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Settings changed by the admin"
    },
    settings_changed_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of times the payment settings of request changed"
    },
    contract_patient_token: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "same in apf"
    },
    skip_overdue_contract_check: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Skip overdue contract check to allow patient to create contract even if there is pending overdue contract"
    },
    last_link_opened: {
      type: DataTypes.DATE,
      allowNull: true
    },
    app_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_arv2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    email_update_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stop_reminder: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "1 stop emial, 2 stop mobile , 3 stop both"
    },
    last_email_read: {
      type: DataTypes.DATE,
      allowNull: true
    },
    email_read_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    email_response_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_sms_failed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 => SMS Sent, 1 => SMS Failed"
    },
    language_preferred: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    pre_approval_lead_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bulk_email_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'split_app_request',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "split_req_id" },
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
        name: "split_request_idx_is_deleted_date_added",
        using: "BTREE",
        fields: [
          { name: "is_deleted" },
          { name: "date_added" },
        ]
      },
      {
        name: "split_request_idx_split_id",
        using: "BTREE",
        fields: [
          { name: "split_req_id" },
        ]
      },
    ]
  });
};
