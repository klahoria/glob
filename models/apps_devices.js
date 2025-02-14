const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apps_devices', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mac_address: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "mac_address"
    },
    remind_later_doctor: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 remind later, 2 -ignore"
    },
    app_version_doctor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "db app version at the time of action"
    },
    remind_later_patient: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 remind later, 2 -ignore"
    },
    app_version_patient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "db app version at the time of action"
    },
    remind_later_partner: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 remind later, 2 -ignore"
    },
    app_version_partner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "db app version at the time of action"
    },
    device_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-web, 1-android, 2-ios"
    }
  }, {
    sequelize,
    tableName: 'apps_devices',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "mac_address",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mac_address" },
        ]
      },
    ]
  });
};
