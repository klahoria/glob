const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brochures', {
    brochure_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    brochure_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    brochure_link: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    priority: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'brochures',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "brochure_id" },
        ]
      },
    ]
  });
};
