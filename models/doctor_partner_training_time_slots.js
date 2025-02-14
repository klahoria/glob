const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_partner_training_time_slots', {
    doctor_partner_training_time_slot_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    training_start_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    training_end_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    training_timezone_offset: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    training_timezone_full_name: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "GMT"
    },
    training_timezone_short_name: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: "GMT"
    },
    training_admin_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    scheduled_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    training_doctor_partner_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    training_doctor_partner_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    training_agent_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    doctor_partner_training_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    training_trainee_emails: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    training_doctor_partner_name: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    training_doctor_partner_email: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    training_doctor_partner_phone: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    training_practice_name: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    training_agent_name: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    training_agent_email: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    training_event_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    training_event_time_slot_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    training_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    training_source: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    training_confirmation_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    no_of_reminders_sent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    training_meeting_link: {
      type: DataTypes.STRING(5000),
      allowNull: false,
      defaultValue: ""
    },
    followup_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    followup_completed_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    training_token: {
      type: DataTypes.STRING(5000),
      allowNull: false,
      defaultValue: ""
    },
    training_time_slot_date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    training_time_slot_date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    lead_source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    training_event_id: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    training_link_request_id: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    training_event_link: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    training_event_organizer: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'doctor_partner_training_time_slots',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_partner_training_time_slot_id" },
        ]
      },
      {
        name: "training_doctor_partner_id",
        using: "BTREE",
        fields: [
          { name: "training_doctor_partner_id" },
        ]
      },
      {
        name: "training_admin_id",
        using: "BTREE",
        fields: [
          { name: "training_admin_id" },
        ]
      },
      {
        name: "doctor_partner_training_time_slot_id",
        using: "BTREE",
        fields: [
          { name: "doctor_partner_training_time_slot_id" },
        ]
      },
    ]
  });
};
