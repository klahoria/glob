const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_device', {
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
    admin_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    access_token: {
      type: DataTypes.STRING(102),
      allowNull: false
    },
    device_token: {
      type: DataTypes.TEXT,
      allowNull: true
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
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    check_idle_session: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    logout_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'admin_device',
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
