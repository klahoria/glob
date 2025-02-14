const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('openai_finetune_models', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    model_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    openai_model_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Refer to openai_models table"
    },
    prompt: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Prompt for finetuning"
    },
    panel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Refer to denefit_panels table"
    },
    max_tokens: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    temperature: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    frequency_penalty: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    presence_penalty: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    training_data_file_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "openai training data file id"
    },
    validation_data_file_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "openai validation data file id"
    },
    base_model: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    finetune_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    fine_tuned_model: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    success: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    finetune_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    error: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    live: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 for not live, 1 for live"
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Admin ID"
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Admin ID"
    },
    finished_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'openai_finetune_models',
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
