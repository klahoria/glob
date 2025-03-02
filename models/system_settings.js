const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('system_settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    platform_balance: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    change_from: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: "1514784600"
    },
    patients_required: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 4
    },
    monthly_price: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 40.00
    },
    fixed_flat_fee: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 30.00
    },
    variable_reward: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 5
    },
    default_lead_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "default lead assigned_to this person(admin_id)"
    },
    proposal_reason_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    patient_wp_query_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "patient wordpress assignee"
    },
    doctor_wp_query_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "doctor wordpress assignee"
    },
    partner_wp_query_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "partner wordpress assignee"
    },
    default_wp_query_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "default wordpress query are assigned to this person"
    },
    call_req_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "default Doctor call request are assigned to this person"
    },
    patient_self_approved_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 6,
      comment: "the customer self verified from the patient panel will be assigned to this admin"
    },
    bank_doc_mandatory: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    retry_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 3
    },
    retry_count_payment_process: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 5
    },
    business_owner_inactive_interval: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    retry_interval_timer_reset: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 2,
      comment: "in minutes"
    },
    verify_validity_secs: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 900
    },
    cancellation_fee: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 30
    },
    start_time: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "06:00",
      comment: "Call req time(min)"
    },
    end_time: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "17:00",
      comment: "Call req time(max)"
    },
    offset: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: -700,
      comment: "Call req time(Timezone)"
    },
    waiting_time: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 60,
      comment: "Call req time(Wait Time)"
    },
    practina_popup_industry_array: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    practina_popup_speciality_array: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recurring_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    recurring_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    threshold_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    threshold_recurring_extra_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    threshold_recurring_extra_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    threshold_pure_gp_value: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true,
      defaultValue: 50.00
    },
    threshold_pure_gp_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    financing_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    show_financial_settings: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    agent_session_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 240,
      comment: "agent session can be long for 240 minutes"
    },
    app_agent_session_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 240,
      comment: "agent session time in apps"
    },
    doctor_session_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 60,
      comment: "doctor session can be long for 60 minutes"
    },
    app_doctor_session_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 60,
      comment: "doctor session time for app"
    },
    admin_session_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30,
      comment: "admin session can be long for 30 minutes"
    },
    app_admin_session_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3600
    },
    patient_session_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 240,
      comment: "admin session can be long for 240 minutes"
    },
    app_patient_session_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 240,
      comment: "patient session time for app"
    },
    partner_session_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 60,
      comment: "partner session can be long for 60 minutes"
    },
    app_partner_session_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 240,
      comment: "partner session time for app"
    },
    enterprise_session_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 180,
      comment: "enterprise session can be long for 180 minutes"
    },
    m2r_pwd: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Denefits@4"
    },
    m2r_allowed_admins: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bank_payment_retry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30,
      comment: "in minutes"
    },
    ach_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 31
    },
    pp_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 31
    },
    callback_email_group: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "sonam.singh@bridgingtech.com"
    },
    claim_update_admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Admin ID to which the ticket will be assigned when claim status changes in edit contract"
    },
    claimed_orp_update_admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Admin ID to which the ticket will be assigned when claimed payment will be converted into ORP"
    },
    document_required_admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Admin ID to which the ticket will be assigned when cron of document required after 15-20 days will run"
    },
    app_disliked_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 195
    },
    md_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 31
    },
    doctor_stats_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doctor_stats_percentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dispute_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 192
    },
    dispute_documents_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20
    },
    customer_unsubscribe_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    webhook_failed_ids: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tips_text_business: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    transfer_status_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 31
    },
    welcome_kit_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 31
    },
    default_marketing_request_admin: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    business_ticket_assingee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 31
    },
    contract_created: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    business_approved_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 90
    },
    asset_report_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 31
    },
    low_potential_bank_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    low_potential_training_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    activation_contract_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    business_revival_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 30
    },
    assets_report_admins: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assets_report_pwd: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "test123"
    },
    ach_active_contract_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 31
    },
    ach_overdue_contract_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 31
    },
    settlement_doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    settlement_admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dispute_admin_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "vikas.kamboj@bridgingtech.com"
    },
    debt_callback_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    debt_business: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 12207
    },
    debt_contract_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subscription_admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ssn_contract_report_password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ssn_contract_report_allowed_admins: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    demand_letter_days: {
      type: DataTypes.STRING(365),
      allowNull: true
    },
    disputed_card_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dispute_docs_allowed_admins: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    testify_admin_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    automation_business: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    automation_partners: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    automation_patient_card: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    auto_run_friday_cron: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    blockedSSN: {
      type: DataTypes.JSON,
      allowNull: true
    },
    admin_login_data: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    admin_can_remove_partner: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    default_preapproval_lead_admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doctor_referral_flat_amount: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 20.00
    },
    payout_mismatch_doctors: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    doctor_referral_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    pot_additional_service_max_limit: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 5000.00
    },
    mainteance_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    partner_default_assign_admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    finance_error_admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    proposal_error_admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pp_business_error_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pp_customer_error_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reminder_error_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    social_error_admin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email_error_assignee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cool_credit_live_business: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cool_credit_dummy_business: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    force_log: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0",
      comment: "1 will be force console all the mysql queries on server"
    },
    exclude_business_from_challenge: {
      type: DataTypes.JSON,
      allowNull: true
    },
    business_challenge_settings: {
      type: DataTypes.JSON,
      allowNull: false
    },
    default_contact: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    call_req_assignee_sales: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stop_dispute_charge_docs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_recuvery_mode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "added key for printing the demand letters"
    },
    recuvery_with_qr_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    whitelabel_api_integration_setting: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Doctor ids to change card-integration card in API integration module"
    },
    news_letter_setting: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "market team ids for notification when customer send questions through newsletter\/community forum"
    }
  }, {
    sequelize,
    tableName: 'system_settings',
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
