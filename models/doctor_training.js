const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_training', {
    training_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Admin Assigned"
    },
    schedule_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    schedule_time: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    schedule_timezone: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "In minutes"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-New Registration 2-Scheduled 3-Rescheduled  4-Follow up 5-Completed 6-No show 7-Canceled"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    out_of_system: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    out_practice_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    out_contact_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    out_phone_no: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    out_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doctor_emails: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_training',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "training_id" },
        ]
      },
    ]
  });
};
