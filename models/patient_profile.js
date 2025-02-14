const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_profile', {
    patient_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
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
      type: DataTypes.STRING(254),
      allowNull: false,
      unique: "patient_email"
    },
    patient_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    patient_alternate_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    patient_alternate_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    patient_image: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    patient_gender: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    patient_password: {
      type: DataTypes.STRING(56),
      allowNull: true
    },
    terms_seen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "0 for not seen 1 for seen"
    },
    pwd22decbkup: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    patient_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_dummy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    city_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true,
      defaultValue: 0
    },
    patient_code: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    patient_ssn: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    stripe_customer_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dl_number: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    app_used: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "-1"
    },
    is_email_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    emails_unsubscribed: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reason_unsub: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_verified_from: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "2: verified from the link in email, 3: self verified"
    },
    email_verification_link: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
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
    people_search_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    dnd: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    last_credential_sent: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_verification_link_sent: {
      type: DataTypes.DATE,
      allowNull: true
    },
    account_approved: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_add_bank: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    show_ach: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "0-hide 1-show"
    },
    show_google_pay: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_apple_pay: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    verification_ip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    verification_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_registered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    mass_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    rating_api: {
      type: DataTypes.STRING(265),
      allowNull: true,
      defaultValue: "\/charge_full_amount,\/charge_one_payment,\/patient_panel_date_change_request,\/partial_payment,\/payoff,\/pay_pf"
    },
    rating_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 168,
      comment: "idle time in hours to take next feedback after the feedback"
    },
    remind_later_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 720,
      comment: "time gap after remind later"
    },
    can_activate_contract: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    send_reauth_email: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    language_preferred: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "en"
    },
    subscribe_unsubscribe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=subscribed for both,1=unsubscribed for both, 2=subscribed for email, 3=subscribed for text"
    }
  }, {
    sequelize,
    tableName: 'patient_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "patient_id" },
        ]
      },
      {
        name: "patient_email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "patient_email" },
        ]
      },
    ]
  });
};
