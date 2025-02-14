const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_admin', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    admin_secret: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    color_code: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'event_admin',
    timestamps: true,
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
        name: "admin_secret",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "admin_secret" },
          { name: "event_id" },
        ]
      },
    ]
  });
};
