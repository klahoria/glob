const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('openai_models', {
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
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Admin ID"
    }
  }, {
    sequelize,
    tableName: 'openai_models',
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
