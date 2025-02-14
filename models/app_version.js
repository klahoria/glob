const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_version', {
    id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    device_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0 for web, 1 for android, 2 for ios"
    },
    app_version: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false
    },
    critical: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0-no,1-yes"
    },
    last_critical: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    app_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "0 for partner, 1 for admin, 2 for doctor, 3 for patient, 10- enterprise"
    },
    platform: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "t1"
    },
    url: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    server_url: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'app_version',
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
