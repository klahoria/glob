const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('practice_type', {
    practice_type: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    practice_type_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    is_travelling: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'practice_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "practice_type" },
        ]
      },
    ]
  });
};
