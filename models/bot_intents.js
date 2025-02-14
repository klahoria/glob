const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bot_intents', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    page_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patterns: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    responses: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    next_questions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    show_login: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0",
      comment: "answer the intent on login page"
    },
    is_deleted: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'bot_intents',
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
