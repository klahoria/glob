const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('openai_training_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    prompt: {
      type: DataTypes.TEXT,
      allowNull: true
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
    trained_on_model: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "OpenAI model ID, comma-separated values"
    }
  }, {
    sequelize,
    tableName: 'openai_training_data',
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
