const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_errors', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    app_version: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 100
    },
    flag: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    text: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    show_popup: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'global_errors',
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
