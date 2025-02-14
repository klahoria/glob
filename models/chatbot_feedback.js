const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chatbot_feedback', {
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
      allowNull: false,
      defaultValue: "openai"
    },
    model_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "openai_finetune_models table id"
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_correct: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "0 for incorrect, 1 for correct"
    },
    feedback_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "admin_id"
    },
    added_to_training: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "1 for added in the custom_model_data table"
    }
  }, {
    sequelize,
    tableName: 'chatbot_feedback',
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
