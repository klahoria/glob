const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('deeplink_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deeplink_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    android_url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ios_url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    web_url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    panel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1-doctor 2-patient  3-partner"
    }
  }, {
    sequelize,
    tableName: 'deeplink_data',
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
