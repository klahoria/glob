const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buss_doc_types', {
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "1"
    },
    doc_limit: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'buss_doc_types',
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
