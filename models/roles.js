const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('roles', {
    role_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    role_json: {
      type: DataTypes.STRING(5000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'roles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
