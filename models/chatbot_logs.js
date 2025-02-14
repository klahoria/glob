const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chatbot_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    panel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "refer to denefit_panels table"
    },
    model_used: {
      type: DataTypes.ENUM('openai','custom'),
      allowNull: false
    },
    fallback: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 for response success, 1 for failed to respond"
    },
    conversations: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'chatbot_logs',
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
    ]
  });
};
