const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('custom_model_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    model_type: {
      type: DataTypes.ENUM('greetings','support','training'),
      allowNull: false,
      defaultValue: "training"
    },
    panel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 for all panels, >0 - refer to denefit_panels table"
    },
    questions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answers: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0 for openai\/feedback, >0 for admin_id"
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    feedback_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "chatbot_feedback table id"
    }
  }, {
    sequelize,
    tableName: 'custom_model_data',
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
