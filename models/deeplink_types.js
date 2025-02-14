const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('deeplink_types', {
    deeplink_type: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deeplink_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'deeplink_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "deeplink_type" },
        ]
      },
    ]
  });
};
