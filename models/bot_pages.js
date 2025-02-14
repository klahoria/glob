const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bot_pages', {
    page_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sub_page: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    suggestions: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bot_pages',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_id" },
        ]
      },
    ]
  });
};
