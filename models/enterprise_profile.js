const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enterprise_profile', {
    enterprise_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    default_parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "enterprise_id (parent of this enterprise)"
    },
    default_doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "default location id"
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1- Superadmin 2-Admin"
    },
    short_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    title: {
      type: DataTypes.ENUM('','Dr.','Mr.','Ms.','Mrs.','Miss.'),
      allowNull: false
    },
    enterprise_first_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    enterprise_last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    enterprise_email: {
      type: DataTypes.STRING(254),
      allowNull: false,
      unique: "etp_email"
    },
    enterprise_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "etp_mobile"
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    profile_image: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    enterprise_password: {
      type: DataTypes.STRING(56),
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
    city_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    practice_address: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    is_dummy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-delete 0-not deleted"
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "admin_id"
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "admin id"
    },
    date_registered: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING(120),
      allowNull: true,
      comment: "enterprise logo for location admin and doctors"
    },
    theme_setting: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    financial_setting: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    language_preferred: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'enterprise_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "enterprise_id" },
        ]
      },
      {
        name: "etp_email",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "enterprise_email", length: 30 },
        ]
      },
      {
        name: "etp_mobile",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "enterprise_mobile", length: 15 },
        ]
      },
    ]
  });
};
