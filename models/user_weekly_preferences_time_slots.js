const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_weekly_preferences_time_slots', {
    time_slot_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    time_slot_start_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time_slot_end_time: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time_slot_timezone_offset: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time_slot_timezone_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    time_slot_week_day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time_slot_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    weekly_preference_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    doctor_partner_type: {
      type: DataTypes.ENUM('doctor','partner'),
      allowNull: true
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
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'user_weekly_preferences_time_slots',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "time_slot_id" },
        ]
      },
    ]
  });
};
