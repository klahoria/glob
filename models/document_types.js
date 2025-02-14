const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('document_types', {
    document_type: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    document_type_name: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    document_type_short_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    is_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    can_be_multiple: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    document_limit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    doc_order: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 99
    },
    customer_doc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'document_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "document_type" },
        ]
      },
    ]
  });
};
