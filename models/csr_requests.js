const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('csr_requests', {
    req_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    doctor_agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "if doctor agent made a csr query for call"
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    partner_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    pp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pp_subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pp_subscription_record_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    preapproval_lead_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wp_query_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "wordpress support query id"
    },
    contact_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-Incoming call,2-Outgoing call,3-Email"
    },
    contact_result: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-Voicemail,2-No Answer,3-Voicemail Full"
    },
    contact_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_req_doc_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "call req from (doc\/agent) on this phone number"
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    enterprise_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    location_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    assigned_contact_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assigned_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    assigned_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "request assigned by"
    },
    first_assigned_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_reassigned: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    stage_signup: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-Complete,2-Incomple"
    },
    stage_training: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1.Initial Training 2.Refresher Training 3.New Feature 4.Training Complete"
    },
    stage_marketing: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1.Welcome Kit 2.Reactivation Kit 3.Brochures 4.Mousepads 5.Pens 6.Manual"
    },
    stage_patient_financing: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1.Pending 2.Active 3.Inactive"
    },
    status_signup: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1.BSA needed 2.Contact Info needed 3.Stripe Verification needed 4.Bank Info Needed 5.Completed"
    },
    status_training: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1.Overdue 2.No Show 3.Canceled 4.Rescheduled"
    },
    status_marketing: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1.Pending 2.Processing 3.Sent 4.Confirmed Receipt"
    },
    status_patient_financing: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1.Guaranteed Payment Issue 2.Concerned with Review 3.Bad Customer Service Experience 4.No Concerns"
    },
    followup_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    customer_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1.Happy 2.Mad"
    },
    training_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    marketing_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Pending, 1-Closed, 2-reopen, 3-followup"
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_issue: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    priority: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    request_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_approved: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_dummy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    account_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1- approve, 0-disapprove"
    },
    action_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 16, 17,18,19,20,21,22,23,24,25,26,27,33,34"
    },
    action_value: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "1-live, 2-dummy, 3-unblock, 4-block, 5-disapprove, 6- approve, 7-verify, 8-update doctor\/partner\/patient info, 9- practice info, 10- office info, 11-payout schedule, 12-update enrollment, 13 -change password, 14-edit percentage, 15-csr-request, 16- update email, 17- Edit Industry, 18- Deleted, 19- Dnd, 20-Marketinginterest 21-Doctor Financial settings changed 22-Doctor base interest settings changed 23-Default Financing Type changed 24-Payment processing settings changed 25- Payment processing threshold settings changed, 26- Delete Card, 27 - Add card, 33-Instant Payment settings changed, 34- Payment process options changed, 40- Accounts receivable options changed"
    },
    csv_ar_link: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "only for multiple file in ar"
    },
    system_generated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    call_req_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "call req date as per user timezone"
    },
    call_req_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    csr_req_tz: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    request_source: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1->from application, 2=> from website"
    },
    user_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0=>unregistered, 1=> registered"
    },
    callback_reason_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "for mapping of callback _reasons  table"
    },
    utm_source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    utm_source_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    meta_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ad_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1 for ads-campaign, 2 for ads-debt-settlement"
    },
    ach_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    split_token: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "0"
    },
    product_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_code_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    product_website_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    initiated_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "for AR\/PP ach payments"
    },
    page_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "added for website csr callback request"
    },
    signup_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    is_ad_lead: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'csr_requests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "req_id" },
        ]
      },
      {
        name: "csr_requests_idx_split_token",
        using: "BTREE",
        fields: [
          { name: "split_token" },
        ]
      },
    ]
  });
};
