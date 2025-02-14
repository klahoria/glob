const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_chk', {
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
    patient_code: {
      type: DataTypes.STRING(9),
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
    patient_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true,
      defaultValue: 0
    },
    patient_ssn: {
      type: DataTypes.STRING(100),
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
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_dummy: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_email_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    email_verification_link: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email_verified_from: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    phone_number_verification: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    id_verification: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    reason_unsub: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mass_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    account_approved: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    emails_unsubscribed: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "0 fr unsubscribe all,1 fr weekly unsub,2 fr monthly unsub"
    },
    people_search_verification: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    date_registered: {
      type: DataTypes.DATE,
      allowNull: false
    },
    patient_ssn_backup: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pwd22decbkup: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    new_patient_image: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'patient_chk',
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
          { name: "patient_email", length: 100 },
        ]
      },
    ]
  });
};
