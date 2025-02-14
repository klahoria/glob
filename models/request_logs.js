const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('request_logs', {
    req_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "profile id (admin_id\/enterprise_id)"
    },
    req_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'request_logs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "req_id" },
        ]
      },
      {
        name: "req_time",
        using: "BTREE",
        fields: [
          { name: "req_time" },
        ]
      },
    ]
  });
};
