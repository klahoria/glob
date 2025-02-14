const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_answers', {
    ta_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    tq_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'training_answers',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ta_id" },
        ]
      },
    ]
  });
};
