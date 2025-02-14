const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_answers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    partner_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    question_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    answer_ids: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'partner_answers',
    timestamps: false,
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
