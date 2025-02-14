const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_questions', {
    tq_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    training_screen_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ta_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'training_questions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tq_id" },
        ]
      },
    ]
  });
};
