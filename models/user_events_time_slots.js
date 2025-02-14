const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_events_time_slots', {
    user_events_time_slot_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    event_start_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    event_end_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    doctor_partner_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    doctor_partner_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    trainee_emails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    doctor_partner_name: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    doctor_partner_email: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    doctor_partner_phone: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    practice_name: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    event_desc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    training_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    event_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    training_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    old_training_ref_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    time_slot_date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    time_slot_date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'user_events_time_slots',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_events_time_slot_id" },
        ]
      },
    ]
  });
};
