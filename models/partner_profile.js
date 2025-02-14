const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_profile', {
    partner_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    default_para_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    mass_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    admin_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    title: {
      type: DataTypes.ENUM('','Dr.','Mr.','Ms.','Mrs.','Miss.'),
      allowNull: false
    },
    partner_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    partner_email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    emails_unsubscribed: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "0 fr unsubscribe all,1 fr weekly unsub,2 fr monthly unsub"
    },
    reason_unsub: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    partner_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "partner_mobile"
    },
    partner_image: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    bio: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    is_dummy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    city_id: {
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: true
    },
    partner_address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    reason: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    training_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    partner_password: {
      type: DataTypes.STRING(56),
      allowNull: false
    },
    terms_seen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "0 for not seen 1 for seen"
    },
    stripe_balance: {
      type: DataTypes.DECIMAL(11,2),
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
    partner_percentage: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 1
    },
    new_partner_percentage: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    nofee_partner_percentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    ar_partner_percentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    ez_partner_percentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    ezdeferred_partner_percentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    referral_code: {
      type: DataTypes.STRING(9),
      allowNull: false
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
    is_blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    can_provide_doctor_share: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1- partner can set partner share from doctor share. 0- cannot"
    },
    default_partner_share: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 5.00
    },
    minimum_share_from_doctor: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    maximum_share_from_doctor: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 10.00
    },
    email_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    account_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    account_verification_email: {
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
    people_search_verification: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    main_partner: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    total_agents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    update_profile: {
      type: DataTypes.INTEGER,
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
    partner_alternate_mobile: {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "This is optional field to enter partner alternate phone number"
    },
    partner_alternate_email: {
      type: DataTypes.STRING(256),
      allowNull: true,
      comment: "This is optional field to enter partner alternate email"
    },
    language_preferred: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "en"
    },
    p2p_bio: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    show_address: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_phone: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_ext: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_alt_phone: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_alt_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    event_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    event_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dnd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    partner_join_link: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_vip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'partner_profile',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "partner_id" },
        ]
      },
      {
        name: "partner_mobile",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "partner_mobile", length: 15 },
        ]
      },
    ]
  });
};
