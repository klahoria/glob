const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_device', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    device_id: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    patient_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    access_token: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    device_token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    app_version: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    device_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "0.0.0.0"
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    logout_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'patient_device',
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
    ]
  });
};
