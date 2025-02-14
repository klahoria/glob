const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leads', {
    lead_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "linked doctor_id from doctor_profile"
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    practice_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    speciality_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "doctor_speciality table id"
    },
    lead_source: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "lead source id"
    },
    practice_email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    alternate_email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    practice_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    alternate_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    practice_address: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    lead_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    website: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    timezone: {
      type: DataTypes.ENUM('IST','ADT','AST','EDT','EST','CDT','CST','MDT','MST','PDT','PST','AKDT','AKST','HDT','HST'),
      allowNull: true
    },
    spoke_to: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    assigned_to: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    assigned_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "admin\/superadmin id"
    },
    is_doctor_exist: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if doc email\/phone exist"
    },
    is_duplicate: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 if doc email\/phone exist in doc profile or leads"
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    followup_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    followup_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    ut_ids: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "unsubscribed_template id"
    },
    via_csv: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "if lead created by csv(1)"
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    followup_timezone: {
      type: DataTypes.ENUM('IST','ADT','AST','EDT','EST','CDT','CST','MDT','MST','PDT','PST','AKDT','AKST','HDT','HST'),
      allowNull: true
    },
    is_dnd: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "0: not-dnd, 1: dnd"
    }
  }, {
    sequelize,
    tableName: 'leads',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lead_id" },
        ]
      },
    ]
  });
};
