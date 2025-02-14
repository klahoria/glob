const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pp_doc_types', {
    doc_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doc_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_mandatory: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'pp_doc_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doc_type_id" },
        ]
      },
    ]
  });
};
