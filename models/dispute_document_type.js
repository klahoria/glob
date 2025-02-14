const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dispute_document_type', {
    document_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    document_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    industry: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: false,
      comment: "1->healthcare, 2->non-healthcare, 3->both"
    },
    is_required: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    is_active: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    doc_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dispute_document_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "document_type_id" },
        ]
      },
    ]
  });
};
