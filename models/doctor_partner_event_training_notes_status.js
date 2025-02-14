const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_partner_event_training_notes_status', {
    doctor_partner_event_training_status_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    training_status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    training_event_time_slot_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    event_training_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    creator_admin_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    training_doctor_partner_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    training_agent_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    training_event_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    doctor_partner_training_status_date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    doctor_partner_training_status_date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_partner_event_training_notes_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_partner_event_training_status_id" },
        ]
      },
    ]
  });
};
