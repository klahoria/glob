const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countries', {
    country_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    country_name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    country_code: {
      type: DataTypes.CHAR(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'countries',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};
