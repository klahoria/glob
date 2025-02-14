const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('designations', {
    designation_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    designation_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'designations',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "designation_id" },
        ]
      },
    ]
  });
};
