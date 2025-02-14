const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('denefits_links', {
    link_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    panel: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    web_urls: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    android_urls: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    ios_urls: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'denefits_links',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "link_id" },
        ]
      },
    ]
  });
};
