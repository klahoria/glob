const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('error_logs', {
    error_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    tracking_id: {
      type: DataTypes.STRING(10000),
      allowNull: true
    },
    error: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    flag: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    extra_info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    error_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    req_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'error_logs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "error_id" },
        ]
      },
      {
        name: "req_id",
        using: "BTREE",
        fields: [
          { name: "req_id" },
        ]
      },
    ]
  });
};
