const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('all_patient_financing', {
    apf_id: {
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
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Agent\/User Id (If agent\/user create contract through scan and pay option)"
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    doctor_record_id: {
      type: DataTypes.STRING(120),
      allowNull: true,
      comment: "patient id in doctor clinic records"
    },
    contract_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "'1 -->> 10% Financing, 2 -->> No Fee Financing(0%), 3 -->> InHouse, 4 -->> EZ financing\t"
    },
    principal_per_recurring: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    interest_per_recurring: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    one_dollar_interest: {
      type: DataTypes.DECIMAL(9,4),
      allowNull: false,
      defaultValue: 0.0000
    },
    advance_interest_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    adv_one_dollar_interest: {
      type: DataTypes.DECIMAL(9,4),
      allowNull: false,
      defaultValue: 0.0000
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
    next_recurring_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    downpayment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    fixed_flat_fee: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    recurring_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 3.00
    },
    recurring_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    threshold_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 100.00
    },
    enrollment_fee: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false,
      defaultValue: 30.00
    },
    threshold_recurring_extra_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    threshold_recurring_extra_percent: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 3.00
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "for selecting recurring date range."
    },
    mode_of_payment: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0 fr montly,1 fr weekly,2 fr biweekly"
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    downpayment_source_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "split app downpayment card"
    },
    number_of_payments: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    interest_rate: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    interest_rate_to_show: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    guarantee_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    doctor_expected_payout: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      comment: "total expected payout to doctor from current date"
    },
    partner_percentage: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 1
    },
    remaining_payments: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    doctor_source_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pf_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    is_guaranteed: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      defaultValue: "0",
      comment: "0- To be decided on first recurring payment, 1-guarnteed, 2-Non guarnteed"
    },
    title: {
      type: DataTypes.ENUM('','Dr.','Mr.','Ms.','Mrs.','Miss.'),
      allowNull: false
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
      type: DataTypes.STRING(100),
      allowNull: false
    },
    patient_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    patient_gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    patient_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    patient_ssn: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    dl_number: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    pf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    payback_methods: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    employer_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    employer_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    employer_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    employer_city: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    annual_income: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    is_minor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    guardian_title: {
      type: DataTypes.ENUM('','Dr.','Mr.','Ms.','Mrs.','Miss.'),
      allowNull: false
    },
    guardian_first_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    guardian_last_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    patient_signature: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    last_error: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enrollment_enabled: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    enrollment_fee_deducted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    para_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    partner_json: {
      type: DataTypes.STRING(7500),
      allowNull: true
    },
    partner_json_new: {
      type: DataTypes.STRING(7500),
      allowNull: true
    },
    doctor_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "doc status 0(Normal), 1(request created from doctor),2(patient finance approved from doctor)"
    },
    patient_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "patient_status o(not filled) 1(info filled but recurring card pending for insertion.) "
    },
    contract_patient_token: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "patient contract token to add patient details from split form",
      unique: "contract_patient_token"
    },
    show_closure_form: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    home_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    office_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    profession: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    office_city_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ez_fee_per_pay: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    ar_ez_fee_per_pay: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    di_fee_per_pay: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    remaining_deferred_duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_contract_deferred: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_new: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    ez_plan_new: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 -> old Ez Payment Plan, 1 -- >> No Fee Dental Payment Plan"
    },
    plan_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2,
      comment: "Cool Credit"
    },
    transaction_fee_metrics_array: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "Transaction fee metrics for each payment source type"
    }
  }, {
    sequelize,
    tableName: 'all_patient_financing',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "apf_id" },
        ]
      },
      {
        name: "contract_patient_token",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contract_patient_token" },
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
        name: "all_financing_idx_apf_id",
        using: "BTREE",
        fields: [
          { name: "apf_id" },
        ]
      },
    ]
  });
};
