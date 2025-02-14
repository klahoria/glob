const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('master_events', {
    master_event_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Assigne ID"
    },
    schedule_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date: {
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
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    event_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-Inbound,2-Outbound,3-Lunch,4-Retentation,5-New Feature,6-Other"
    },
    assigned_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'master_events',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "master_event_id" },
        ]
      },
    ]
  });
};
