const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lead_history', {
    history_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "admin id who updated record"
    },
    lead_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      allowNull: false
    },
    speciality_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lead_source: {
      type: DataTypes.INTEGER,
      allowNull: false
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
      defaultValue: 0
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
      type: DataTypes.ENUM('IST','ADT','AST','EDT','EST','CDT','CST','MDT','MST','PDT','PST','AKDT','AKST','HDT','HST',''),
      allowNull: true
    },
    assigned_to: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    assigned_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_doctor_exist: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_duplicate: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    followup_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    followup_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    spoke_to: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lead_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "history_id" },
        ]
      },
    ]
  });
};
