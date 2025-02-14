const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('openai_question_answer', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    training_data_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'openai_training_data',
        key: 'id'
      }
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    weight: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: "0 for no training, 1 for training"
    }
  }, {
    sequelize,
    tableName: 'openai_question_answer',
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
      {
        name: "training_data_id",
        using: "BTREE",
        fields: [
          { name: "training_data_id" },
        ]
      },
    ]
  });
};
