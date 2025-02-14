const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_financing_1', {
    pf_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    apf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    patient_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    is_contract_settled: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    make_settled: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    location_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "location manager profile"
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    financer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "financer profile"
    },
    enterprise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Enterprise Profile"
    },
    doctor_record_id: {
      type: DataTypes.STRING(120),
      allowNull: true,
      comment: "patient id in doctor clinic records"
    },
    one_paid_to_denefits: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    paid_by_denefits: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    eligible_for_reward: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    reward_paid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    reward_amount: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    bankrupt_stop_payment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    contract_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "'1 -->> 10% Financing, 2 -->> No Fee Financing(0%), 3 -->> InHouse, 4 -->> EZ financing"
    },
    one_dollar_interest: {
      type: DataTypes.DECIMAL(9,5),
      allowNull: false,
      defaultValue: 0.00000,
      comment: "one $ interest on financed amount"
    },
    principal_per_recurring: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    interest_per_recurring: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    one_dollar_interest2: {
      type: DataTypes.DECIMAL(9,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    interest_per_recurring_2: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    principal_per_recurring2: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    advance_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    advance_interest_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    adv_one_dollar_interest: {
      type: DataTypes.DECIMAL(9,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    treatment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    downpayment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    financed_amount: {
      type: DataTypes.DECIMAL(9,2),
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
    recurring_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    nxt_recurring_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    number_of_payments: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    remaining_payments: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    missing_payments: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    next_missing_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pf_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "1-active (no recurring payment) 2-active (first recurring done) 3-overdue 4-completed 5-cancelled"
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    secondary_source_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Source id for the secondary recurring card"
    },
    is_activated: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1: Contract Created 0: Contract Creation Failed 2: Contract creation pending"
    },
    settlement_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "Contract Settlement amount (80%)"
    },
    settlement_treatment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    settlement_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_guaranteed: {
      type: DataTypes.ENUM('0','1','2','3','4'),
      allowNull: false,
      defaultValue: "0",
      comment: "0- To be decided on first recurring payment, 1-guarnteed, 2-Non guarnteed from first payment, 3- Non guaranteed from dispute, 4- Non guaranteed from Bankruptcy Enable"
    },
    cash_adjustment: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    advance_balance: {
      type: DataTypes.FLOAT,
      allowNull: true
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
    late_fee: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 25
    },
    late_fee_buss_share: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 0.00
    },
    min_late_fee_denefits_share: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    mode_of_payment: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0 fr montly,1 fr weekly,2 fr biweekly"
    },
    total_doctor_transfer_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Total Number of transfers to doctor"
    },
    missed_doctor_transfers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of missing transfers to doctor"
    },
    transfers_paid_by_denefits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of transfers paid by denefits to doctor"
    },
    transfer_amount_paid_by_denefits: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      comment: "Missing transfer amount paid by denefits to doctor"
    },
    total_amount_paid_by_denefits: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      comment: "Total amount paid by denefits"
    },
    doctor_expected_payout: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "total expected payout to doctor from current date"
    },
    collection_percent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    guarantee_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    partner_percentage: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 1
    },
    edit_contract_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "increment if contract is edited on panel"
    },
    doctor_source_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    non_guaranteed_reason: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    claim_check_30: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    claim_check_60: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 90
    },
    claim_check_30_gp2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    claim_check_60_gp2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 90
    },
    instant_claim_30: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    instant_claim_60: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    can_claim: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    is_debt_contract: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    legal_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "leagal status=0 => overdue  status=1=> Leagal contract"
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
    invalid_patient_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
      allowNull: true
    },
    is_minor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    email_sent: {
      type: DataTypes.DATE,
      allowNull: true
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
    digital_signature: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    last_cron_payment: {
      type: DataTypes.DATE,
      allowNull: true
    },
    shp_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    edit_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    enrollment_enabled: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    para_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    enrollment_fee_deducted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    partner_json: {
      type: DataTypes.STRING(7500),
      allowNull: true
    },
    partner_json_new: {
      type: DataTypes.STRING(7500),
      allowNull: true
    },
    cancelled_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "date of cancellation of contract"
    },
    cancellation_id: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    doctor_card_error: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    dispute_payment_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    dnd: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    dnd_apply_on: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0 - only for current contract 1-patient profile"
    },
    ptp_json: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ptp_refresh_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    stop_payment_reminder: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    stop_payment_reminder_sms: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
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
    allow_waiver: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "0-not allowed, 1-allowed"
    },
    waiver_factor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    min_recurring_amount_for_waiver: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 100.00
    },
    bypass_waiver_limit: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    enrollment_deducted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    contract_metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    md_cron_payment: {
      type: DataTypes.DATE,
      allowNull: true
    },
    show_payoff_btn: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    product_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contract_intimation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0 = not sent, 1 = 1st sendt,2 = final sent "
    },
    export_to_m2r_report: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "1. yes, 0. NO"
    },
    office_city_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    customer_profile_update: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0:false,1:true"
    },
    ez_fee_per_pay: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    ar_ez_fee_pay: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    ar_ez_fee_per_pay: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0
    },
    ar_ez_discount_denefits_share_percent: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      comment: "discount save denefits fixed share"
    },
    ar_ez_discount_denefits_share_remaining: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      comment: "discount save denefits share total remaining amount"
    },
    is_contract_verified: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    di_paid_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "for deferred plans only"
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
    restrict_daily_cron: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    overdue_contract_reminder: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_new: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    qr_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    qr_redirect_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    signature_customer_first_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    signature_customer_last_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    signature_customer_ssn: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'patient_financing_1',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pf_id" },
        ]
      },
      {
        name: "date",
        using: "BTREE",
        fields: [
          { name: "date_added" },
        ]
      },
      {
        name: "mix",
        using: "BTREE",
        fields: [
          { name: "one_paid_to_denefits" },
          { name: "paid_by_denefits" },
          { name: "pf_status" },
        ]
      },
      {
        name: "contract",
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
      {
        name: "doctor",
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
      {
        name: "patient_id",
        using: "BTREE",
        fields: [
          { name: "patient_id" },
        ]
      },
      {
        name: "source_id",
        using: "BTREE",
        fields: [
          { name: "source_id" },
        ]
      },
      {
        name: "pf_status",
        using: "BTREE",
        fields: [
          { name: "pf_status" },
        ]
      },
    ]
  });
};
