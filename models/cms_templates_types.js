const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cms_templates_types', {
    type: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    panel: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cms_templates_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type" },
        ]
      },
    ]
  });
};
