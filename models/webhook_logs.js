const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('webhook_logs', {
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
    previous_data: {
      type: DataTypes.STRING(400),
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
    req_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'webhook_logs',
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
    ]
  });
};
