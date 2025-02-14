const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('internal_email', {
    id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    internal_email: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'internal_email',
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
