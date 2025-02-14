const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bot_fallbacks', {
    fallback_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bot_response: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    guesses_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_resolved: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bot_fallbacks',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fallback_id" },
        ]
      },
    ]
  });
};
