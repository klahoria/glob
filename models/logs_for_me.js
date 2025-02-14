const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logs_for_me', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    error: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    log_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'logs_for_me',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
    ]
  });
};
