const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const DoctorProfile = sequelize.define('doctor_profile', {
    doctor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    enterprise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "enterprise_profile id"
    },
    account_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mass_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    title: {
      type: DataTypes.ENUM('', 'Dr.', 'Mr.', 'Ms.', 'Mrs.', 'Miss.'),
      allowNull: true
    },
    doctor_first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "location name as first name if enterprise id is greater than zero for statement descriptor"
    },
    doctor_last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    doctor_email: {
      type: DataTypes.STRING(254),
      allowNull: true,
      unique: "doc_email"
    },
    doctor_address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    doctor_city_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    phase_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    phase_req_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    phase_base_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    document_req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    doctor_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "doc_mob"
    },
    doctor_alternate_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    referral_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    doctor_image: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    doctor_password: {
      type: DataTypes.STRING(56),
      allowNull: true
    },
    terms_seen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "0 for not seen 1 for seen"
    },
    tnc_initials: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    city_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    practice_address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    payout_fee_percent: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      defaultValue: 0.50
    },
    inactive_fee_percent: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
      defaultValue: 5.00
    },
    can_finance: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    can_finance_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_guaranteed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_dummy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    customer_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    stripe_balance: {
      type: DataTypes.DECIMAL(11, 2),
      allowNull: true
    },
    stripe_account_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    stripe_publishable: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    stripe_secret: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tin: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    practice_email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    practice_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    practice_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    practice_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    manager_title: {
      type: DataTypes.ENUM('', 'Dr.', 'Mr.', 'Ms.', 'Mrs.', 'Miss.'),
      allowNull: false
    },
    manager_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    manager_mobile: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    manager_email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    practice_type: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    doctor_speciality: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    message_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: -1
    },
    reason: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    emails_unsubscribed: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "0 fr unsubscribe all,1 fr weekly unsub,2 fr monthly unsub"
    },
    reason_unsub: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    app_used: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "-1"
    },
    reset_password: {
      type: DataTypes.STRING(56),
      allowNull: true
    },
    reset_login: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_refreshed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    doctor_source_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1-blocked, 2-deleted"
    },
    enrollment_enabled: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    training_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1-New Registration 2-Scheduled 3-Rescheduled  4-Follow up 5-Completed"
    },
    lead_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    verification_reason: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    website_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    phone_number_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    id_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    email_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    people_search_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_registered: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reports_hard_copy: {
      type: DataTypes.ENUM('0', '1'),
      allowNull: false,
      defaultValue: "0",
      comment: "If doctor need hard copy of reports."
    },
    is_vip: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "default 0 and 1 for VIP previliage"
    },
    company_website: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    type_of_business: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    show_finance_helper: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    financing_view: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "1-new 0-old"
    },
    send_weekly_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    send_monthly_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    payouts_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    ut_ids: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "unsubscribed_template id"
    },
    location_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    interested_marketing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    dnd: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    location_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    financing_password: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "for location here we add global finanancing password for remove restriction"
    },
    can_add_bank: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1- can add bank, 0-cannot add bank"
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "id (admin or superAdmin)"
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "id(0-doctor itself, other than 0-admin or superAdmin)"
    },
    plan_id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "1,2"
    },
    is_free: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    statement_descriptor_prefix: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    is_web_push_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "this is to active and deactivate the notification for web, 1=>Notification will trigger, 0=> notification will not trigger"
    },
    is_android_push_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "this is to active and deactivate the notification for android,1=>trigger notification to website, 0=> donot trigger notification"
    },
    is_ios_push_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1=>trigger notification to ios, 0=> donot trigger notification"
    },
    sales_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "sales id associated with doctor"
    },
    admin_manager: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "manager associated with doctor"
    },
    admin_team_leader: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "team leader associated with doctor"
    },
    admin_supervisor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "supervisor associated with doctor"
    },
    default_instant_card_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rating_api: {
      type: DataTypes.STRING(265),
      allowNull: true,
      defaultValue: "\/pay_processing_payment,\/send_payment_process_link,\/pay_pf,\/submit_claim_form"
    },
    rating_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 169,
      comment: "idle time in hours to take next feedback after the feedback"
    },
    remind_later_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 720,
      comment: "time gap after remind later"
    },
    panel: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1- panel 0 -open api"
    },
    is_approved: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "2",
      comment: "2-pending,1-approved,0-disapproved"
    },
    is_claim_available: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    days_ticket_created: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    retention_automatic_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    persona_inquiry_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    persona_session_token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    apple_user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    facebook_user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gmail_user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    language_preferred: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "en"
    },
    signup_emails_sent: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "doctor signup email sent days"
    },
    business_referral_code: {
      type: DataTypes.STRING(9),
      allowNull: true,
      comment: "for business to business refer only"
    },
    payout_after: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Payouts will be shown after this date if any"
    }
  }, {
    sequelize,
    tableName: 'doctor_profile',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
      {
        name: "doc_email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_email", length: 60 },
        ]
      },
      {
        name: "doc_mob",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_mobile", length: 15 },
        ]
      },
      {
        name: "doctor_profile_idx_is_dummy_doctor_id",
        using: "BTREE",
        fields: [
          { name: "is_dummy" },
          { name: "doctor_id" },
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

  DoctorProfile.associate = function (models) {

    DoctorProfile.hasOne(models.doctor_settings, {
      foreignKey: 'doctor_id',
      as: 'settings' // Alias for the relationship
    });

    DoctorProfile.hasMany(models.doctor_alternate_emails, {
      foreignKey: 'doctor_id',
      as: 'doctorAlternateEmail' // Alias for the relationship
    });

    DoctorProfile.hasOne(models.doctor_bank, { foreignKey: 'doctor_id', as: 'doctor_bank' });
    DoctorProfile.hasOne(models.doctor_verification, { foreignKey: 'doctor_id', as: 'doctor_verification' });


  };


  return DoctorProfile;

};
