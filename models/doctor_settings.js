const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const DoctorSettings = sequelize.define('doctor_settings', {
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: 1
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
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ez_recurring_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 3.00
    },
    threshold_recurring_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 3.00
    },
    ez_recurring_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    financing_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 20,
      comment: "1 -->> 10% Financing, 2 -->> No Fee Financing(0%), 4 -->> InHouse, 6 -->> EZ financing, 3 -->> 0% + 10%, 5 -->> 0% + Inhouse, 7 -->> 0% + EZ, 8 -->> Inhouse + EZ, 9 -->> 10% + EZ, 10 -->> 0% + Inhouse + EZ, 11 -->> 0% + 10% + EZ, 12 -->> Deferred Plan Only, 13 -->> Deferred Plan + 10%, 14 -->> Deferred Plan + 0%, 15 -->> Deferred Plan + Inhouse, 16 -->> Deferred Plan + EZ financing, 17 -->> Deferred Plan + 10% + 0%, 18 -->> Deferred Plan + 10% + EZ, 19 -->> Deferred Plan + 10% + 0% + EZ, 20 -->> Deferred Plan + 0% + Inhouse, 21 -->> Deferred Plan + 0% + EZ, 22 -->> Deferred Plan + 0% + Inhouse + EZ, 23 -->> Deferred Plan + Inhouse + EZ"
    },
    show_financial_settings: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    can_schedule_payout: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1: business can change payout schedule"
    },
    can_edit_contract: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_edit_recurring_date: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    can_cancel_contract: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    can_instant_claim: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_change_instant_claim: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "can business change the instant claim"
    },
    is_adjust_extra_upfront: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "We adjust extra upfront amount in total payable amount in edit contract or we keep it as it is"
    },
    no_daya: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "this will overwrite the extra upfront adjustment setting and will not adjust extra upfront if paid"
    },
    guarantee_percent_new_ten: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 15
    },
    can_increase_overdue_contract: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "If admin can increase overdue contract finance amount or not"
    },
    is_adjust_upfront_with_interest: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "If we adjust the extra upfront in edit contract by increase interest per recurring"
    },
    add_financial_settings: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    default_financing_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 20
    },
    advance_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_ez_advance_extra_payments: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    ez_advance_extra_payments: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    advance_extra_payments: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    threshold_advance_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 15000.00
    },
    threshold_advance_extra_payments: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    threshold_advance_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 10.00
    },
    payment_reserve_on_pay: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    payment_reserve_on_pay_new_ten: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    minimum_tenure: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 12
    },
    maximum_tenure: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 48
    },
    minimum_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 300.00
    },
    maximum_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 20000.00
    },
    skip_breakdown: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    no_fee_min_max_settings: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: "[{\"minimum_amount\":300,\"maximum_amount\":20000,\"minimum_tenure\":3,\"maximum_tenure\":48}]"
    },
    ten_finance_settings: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: "{\"minimum_amount\":300,\"maximum_amount\":99999,\"minimum_tenure\":1,\"maximum_tenure\":99,\"minimum_interest\":0,\"maximum_interest\":100}"
    },
    ten_downpayment_percent: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 30
    },
    new_ten_finance_settings: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: "{\"minimum_amount\":300,\"maximum_amount\":99999,\"minimum_tenure\":1,\"maximum_tenure\":99,\"minimum_interest\":0,\"maximum_interest\":100}"
    },
    new_ten_downpayment_percent: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    months_to_show_array: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "[3,6,9,12,18,24,36]",
      comment: "plan with these months will be shown"
    },
    downpayment_percent: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 30
    },
    denefits_flat_interest: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 19.90,
      comment: "required flat 20% interest"
    },
    threshold_months_for_flat_interest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 12,
      comment: "20% logic below 12 months"
    },
    base_interest_rate: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 16.99
    },
    frequency_rate: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 6
    },
    frequency_value: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.50
    },
    daily_max_transaction_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 500.00,
      comment: "Daily transaction amount permitted"
    },
    daily_max_transaction_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5,
      comment: " Daily transactions permitted"
    },
    single_transaction_max_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 500.00,
      comment: "max transaction permitted in single payment"
    },
    otp_threshold_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 250.00,
      comment: "verification code required above transaction amount "
    },
    show_process_payment: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_instant_payment: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_instant_payment_doctor: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1- instant payment option is visible to doctor"
    },
    instant_payout_fee: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 2.00
    },
    min_finance_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 300.00
    },
    min_process_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 1.00
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
    process_hide_split_screen: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    process_doctor_share_percent: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 50.00,
      comment: "a-Let me Bear Transaction fee. b- 50 - 50% c- Let customers bear the Transaction fee. d- custom value"
    },
    process_show_breakdown_transaction: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    process_doctor_share_option: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "b",
      comment: "a-Let me Bear Transaction fee. b- 50 - 50% c- Let customers bear the Transaction fee. d- custom value"
    },
    ar_hide_split_screen: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    ar_doctor_share_percent: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 50.00,
      comment: "a-Let me Bear Transaction fee. b- 50 - 50% c- Let customers bear the Transaction fee. d- custom value"
    },
    ar_show_breakdown_transaction: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    ar_doctor_share_option: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "b",
      comment: "a-Let me Bear Transaction fee. b- 50 - 50% c- Let customers bear the Transaction fee. d- custom value"
    },
    show_ar_reason_to_customer: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    show_reverse: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_ar_reverse: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    show_ar: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    min_ar_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 1.00
    },
    ar_daily_max_transaction_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 20000.00
    },
    ar_daily_max_transaction_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1000
    },
    ar_single_transaction_max_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 20000.00
    },
    ar_otp_threshold_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 10000.00
    },
    ar_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 3.00
    },
    ar_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_threshold_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 100.00
    },
    ar_threshold_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 3.00
    },
    ar_threshold_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    show_ar_instant_payment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    ar_instant_payout_fee: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 2.00
    },
    ar_instant_single_transaction_max_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 350.00
    },
    instant_single_transaction_max_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 350.00,
      comment: "\tmax transaction permitted in single payment for instant"
    },
    instant_daily_max_transaction_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 2000.00,
      comment: "Daily transaction amount permitted for instant payment"
    },
    instant_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 10.00,
      comment: "dependent on total success processed amount"
    },
    instant_watch_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    recurring_edit_date_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 2.00
    },
    recurring_edit_date_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.10
    },
    recurring_edit_date_threshold_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 250.00
    },
    recurring_edit_date_threshold_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 2.00
    },
    min_date_change_fee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      comment: "the minimum amount to charge while the date change"
    },
    first_reminder_before_days: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 7,
      comment: "1st reminder will send before days"
    },
    second_reminder_before_days: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 2,
      comment: "2nd reminder will send before days "
    },
    overdue_reminder_for_days: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 14,
      comment: "days for reminding recurring payment after overdue"
    },
    reminder_amount_limit: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 20000.00,
      comment: "recurring limit"
    },
    extend_payment_days_doctor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 90
    },
    extend_payment_days_patient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15
    },
    allowed_date_change_count_patient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    ar_fee_percent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "ar fee percent in calaims to deduct"
    },
    ar_is_guaranteed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "by default contract guarantee type for AR"
    },
    split_default_expiry_days: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 364,
      comment: "split end date gap in days"
    },
    split_plan_gap_days: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 30,
      comment: "end date while selection would be 30 days"
    },
    ar_split_plan_gap_days: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 60
    },
    three_d_secure: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1- enable 0 -disable"
    },
    ar_three_d_secure: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    partner_share_from_doctor_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    partner_share_from_doctor_json_ihf: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_show_api_doc: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    api_doc_json_link: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    orp_lower_limit: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 100.00
    },
    orp_upper_limit: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 1000.00
    },
    can_skip_secondary_source: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "1: business can skip adding secondary source. 0: 1: business cannot skip adding secondary source"
    },
    show_backup_screen: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    pp_restricted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    show_upload_doc: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "0-hide 1-show"
    },
    pp_bus_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    pp_bus_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
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
      defaultValue: 0.00
    },
    show_closure_form: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    breakdown_limit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      comment: "number of breakdowns allowed"
    },
    show_special_payments: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "For cardon, special payment values are shown."
    },
    payment_matrix_array: {
      type: DataTypes.STRING(1500),
      allowNull: false,
      defaultValue: "[{\"min_financed_amount\":300,\"max_financed_amount\":20000,\"recurring_type\":3,\"primary_type\":2,\"backup_type\":3,\"backup_required\":0}]",
      comment: "primary_type 1(Bank),2(Card),3(Any)\trecurring_type 1(Bank),2(Card),3(Any) backup_type 1(Bank),2(Card),3(Any) backup_required 1(Required),2(Optional)"
    },
    pp_matrix_array: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: "[{ \"min_amount\": 0, \"max_amount\": 500, \"min_active_contracts\": 0, \"payment_method\": 1, \"view_doc\": 1, \"can_business_pay\" : 0 }]"
    },
    upload_customer_document: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    cus_doc_required: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    allow_contract_waiver: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "0 - not allowed, 1- allowed, default - 1"
    },
    common_waiver_factor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    common_min_recurring_amount_for_waiver: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 100.00
    },
    enrollment_waiver: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    block_contract_creation_in_overdue: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    update_contract_gp: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1: All-Contract, 2: Upcoming-Contract"
    },
    contract_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1: 10% PlatformFee, 2: 0% PlatformFee, 3: Both"
    },
    is_guaranteed: {
      type: DataTypes.STRING(4),
      allowNull: false,
      comment: "1: Guaranteed, 2: Non-Guaranteed"
    },
    contract_status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "[{\"contract_type\":1,\"is_guaranteed\":1},{\"contract_type\":2,\"is_guaranteed\":1},{\"contract_type\":4,\"is_guaranteed\":1},{\"contract_type\":6,\"is_guaranteed\":1}]"
    },
    recurring_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    can_add_cus_bank: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1- can add 0- can't add"
    },
    allow_one_card: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    update_contract_ds: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Update Denefits Share for new ten 1- all contracts 2-upcoming contracts"
    },
    change_payment_date_buss_percent: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 0.00
    },
    collection_percent_new_ten: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 10.00
    },
    update_contract_collection: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1- all contracts 2 -upcoming contracts"
    },
    default_late_fee: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 25.00,
      comment: "Late fee to be charge for new 10%"
    },
    late_fee_buss_percent: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 100.00,
      comment: "Business share from late fee for new 10%"
    },
    min_late_fee_denefits_share: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 25.00
    },
    min_change_payment_date_denefits_share: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    can_send_email_connected_bank: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    first_recurring_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    first_recurring_days_deferred: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    first_recurring_days_ar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 15
    },
    max_recurring_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 60,
      comment: "Used for single button solution"
    },
    default_interest_rate: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 13.00
    },
    send_pp_matrix_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    show_disputed_tab: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    show_buss_payment_link_btn: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_buss_confirm_btn: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_gp_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_payoff_btn: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_payoff_btn_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_payoff_btn_overdue: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_business_payoff_btn: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    show_add_product: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_variable_service: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    show_bank_pay_over_time: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    pot_financing_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 2,
      comment: "2 for no-fee, 4 for in-house and 5 for both"
    },
    skip_loss_non_guaranteed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    base_payoff_share: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 20
    },
    show_logs_business: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0. not show logs to business,1. show logs to business."
    },
    is_ach_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_persona_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    doctor_inactive_days: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "365",
      comment: "doctors inactive days for settlement reminder"
    },
    caping_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fixed_enrollment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 39.00
    },
    variable_enrollment_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cancel_contract_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 45.00,
      comment: "default cancle contract fee = $30"
    },
    show_buss_terms: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    buss_terms_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ez_pay_fee: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 10
    },
    ez_min_max_settings: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "[{\"minimum_amount\":300,\"maximum_amount\":20000,\"minimum_tenure\":3,\"maximum_tenure\":48}]"
    },
    ez_threshold_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 100.00
    },
    ez_threshold_recurring_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 3.00
    },
    ez_threshold_recurring_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ez_threshold_advance_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 15000.00
    },
    ez_threshold_advance_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 10.00
    },
    ez_frequency_rate: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 6
    },
    ez_frequency_value: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.50
    },
    ez_base_interest_rate: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true,
      defaultValue: 15.99
    },
    ez_denefits_flat_interest: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 18.90
    },
    ez_months_to_show_array: {
      type: DataTypes.STRING(3000),
      allowNull: false,
      defaultValue: "[3,6,9,12,18,24]"
    },
    ez_downpayment_percent: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 30
    },
    ez_advance_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ez_threshold_advance_extra_payments: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1=free, 4=silver, 3=gold, 2=platinum"
    },
    subscription_grace_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ar_ez_pay_fee: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 10
    },
    ar_ez_min_max_settings: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "[{\"minimum_amount\":300,\"maximum_amount\":20000,\"minimum_tenure\":3,\"maximum_tenure\":24}]"
    },
    ar_ez_threshold_advance_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_ez_threshold_advance_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_ez_frequency_rate: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    ar_ez_frequency_value: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_ez_base_interest_rate: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true,
      defaultValue: 0.00
    },
    ar_ez_denefits_flat_interest: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_ez_months_to_show_array: {
      type: DataTypes.STRING(3000),
      allowNull: false,
      defaultValue: "[3,6,9,12,18,24]"
    },
    ar_ez_advance_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ar_ez_threshold_advance_extra_payments: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    ar_ez_proposal_reminder_day_diff: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "{\"email_not_open\":4,\"email_read\":4,\"link_open\":4,\"plan_selected\":4}"
    },
    ar_ez_proposal_reminder_on_off: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "0 -> CRON OFF, 1 -> CRON ON"
    },
    ar_ez_late_fees_settings: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "{\"late_fees_days\":0,\"late_fees_percentage\":100}"
    },
    ar_ez_charge_interest_above_month: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    ar_ez_can_charge_enrollment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    ar_ez_discount_save_denefits_share_percent: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
      comment: "discount save denefits fixed share from doctor share"
    },
    di_min_max_settings: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "[{\"minimum_amount\":300,\"maximum_amount\":20000,\"minimum_tenure\":6,\"maximum_tenure\":48}]"
    },
    di_threshold_advance_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 15000.00
    },
    di_threshold_advance_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 10.00
    },
    di_frequency_rate: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 6
    },
    di_frequency_value: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.50
    },
    di_base_interest_rate: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 19.90
    },
    di_denefits_flat_interest: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 19.90
    },
    di_months_to_show_array: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: "[3,6,9,12,18,24,36]"
    },
    di_downpayment_percent: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 30
    },
    deferred_benefits: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1=on,0=off"
    },
    di_advance_extra_payments: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    di_threshold_advance_extra_payments: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    di_advance_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    di_pay_fee: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 10
    },
    di_start_month: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 12
    },
    di_pay_more_percentage: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true,
      defaultValue: 30.00
    },
    di_make__payment_button_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    expected_revenue_percentage: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 20.00,
      comment: "Exprected Revenue Percentage is using in business dashboard to draw chart"
    },
    pp_invoice_reason: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    threshold_expected_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 3000.00
    },
    ar_ez_proposal_subscription: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    stop_ar_share: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "stop ar v2 share of partner"
    },
    contract_cancel_with_stripe_account: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1",
      comment: "allow doctor to select connected account when canceling the contract 0 >>> NO, 1 >>> YES"
    },
    show_customer_reference: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "while creating contract"
    },
    payment_method_setting_doctor: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "{\"doctor_card\": 1, \"customer_card\": 1, \"doctor_bank\": 1, \"customer_bank\": 1, \"apple_pay\":1,\"google_pay\":1, \"qr_code\":1}"
    },
    payment_method_setting_customer: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "{\"card\": 1, \"bank\": 1, \"apple_pay\":1,\"google_pay\":1, \"qr_code\":1}"
    },
    charge_upfront: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    show_subscription: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: Hide Subscription, 1: Show Subscription"
    },
    ten_percent_payment_matrix: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "[{\"min_financed_amount\":300,\"max_financed_amount\":20000,\"recurring_type\":3,\"primary_type\":2,\"backup_type\":3,\"backup_required\":0}]"
    },
    no_fee_payment_matrix: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "[{\"min_financed_amount\":300,\"max_financed_amount\":20000,\"recurring_type\":3,\"primary_type\":2,\"backup_type\":3,\"backup_required\":0}]"
    },
    in_house_payment_matrix: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "[{\"min_financed_amount\":300,\"max_financed_amount\":20000,\"recurring_type\":3,\"primary_type\":2,\"backup_type\":3,\"backup_required\":0}]"
    },
    ez_payment_matrix: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "[{\"min_financed_amount\":300,\"max_financed_amount\":20000,\"recurring_type\":3,\"primary_type\":2,\"backup_type\":3,\"backup_required\":0}]"
    },
    ar_payment_matrix: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "[{\"min_financed_amount\":300,\"max_financed_amount\":20000,\"recurring_type\":3,\"primary_type\":2,\"backup_type\":3,\"backup_required\":0}]"
    },
    deferred_payment_matrix: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "[{\"min_financed_amount\":300,\"max_financed_amount\":20000,\"recurring_type\":3,\"primary_type\":2,\"backup_type\":3,\"backup_required\":0}]"
    },
    business_refer_share: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "{\"ten_percent_payment_plan\": 20,\"no_fee_payment_plan\":20,\"in_house_payment_plan\":20,\"ez_payment_plan\":20,\"ar_payment_plan\":20, \"ez_deferred_payment_plan\": 20}"
    },
    extra_share_json: {
      type: DataTypes.JSON,
      allowNull: true
    },
    show_doctor_referral: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    pp_subscription_settings: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: "{\"convenience_fee\": 10, \"cancellation_fee\": 0, \"show_pp_subscription\": 0, \"can_business_pay\": 1, \"show_transaction_fee\": 0, \"show_cancel_subscription_customer\": 0, \"backup_required\": 0, \"min_process_amount\": 1.00, \"daily_max_transaction_amount\": 500.00, \"daily_max_transaction_number\": 5, \"single_transaction_max_amount\": 500.00, \"otp_threshold_amount\": 250.00}"
    },
    pp_subscription_threshold_settings: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: "{\"process_extra_amount\": 3.00, \"process_extra_percent\": 0.00, \"process_threshold_amount\": 0.00, \"process_threshold_extra_amount\": 0.25, \"process_threshold_extra_percent\": 3.00}"
    },
    pp_subscription_buss_threshold_settings: {
      type: DataTypes.STRING(300),
      allowNull: false,
      defaultValue: "{\"pp_bus_extra_amount\": 0.00, \"pp_bus_extra_percent\": 0.00, \"pp_bus_threshold_amount\": 0.00, \"pp_bus_threshold_extra_amount\": 0.00, \"pp_bus_threshold_extra_percent\": 0.00}"
    },
    continue_deferred_edit_contract: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 - deferred benefits will be over, 2 - deferred benefits will be continue in edit contract"
    },
    ez_plan_new: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 -> old Ez Payment Plan, 1 -- >> No Fee Dental Payment Plan"
    },
    show_pot_additional_service: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    cool_credit_finance_settings: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: "{\"minimum_amount\":300,\"maximum_amount\":99999,\"minimum_tenure\":1,\"maximum_tenure\":99,\"minimum_interest\":0,\"maximum_interest\":100}"
    },
    is_DL_mandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_payout_biweekly: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    biweekly_payout_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_biweekly_payout_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    display_payoff_btn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    proposal_notification_setting: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: Off, 1: On"
    },
    ar_bsa_form_setting: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: OFF, 1: ON"
    }
  }, {
    sequelize,
    tableName: 'doctor_settings',
    timestamps: false,
    indexes: [
      {
        name: "doctor_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
    ]
  });

  DoctorSettings.associate = (models) => {
    DoctorSettings.belongsTo(models.doctor_profile, { foreignKey: 'doctor_id', as: 'profile' });
  };
  

  return DoctorSettings;
  
};
