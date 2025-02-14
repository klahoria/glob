const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('firebase_events', {
    event_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event_date: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event_timestamp: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    event_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_pseudo_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_first_touch_timestamp: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    stream_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    platform: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    device_metadata: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    continent: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    app_info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    engagement_time_msec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    business_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ip_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'firebase_events',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "event_id" },
        ]
      },
    ]
  });
};
