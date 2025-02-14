const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('openai_prompts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prompt_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Refer to openai_prompt_types table"
    },
    prompt_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    prompt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    panel_ids: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Comma-separated list of panel IDs"
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Admin ID"
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    is_live: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'openai_prompts',
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
