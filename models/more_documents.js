const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('more_documents', {
    more_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    document_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    claim_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    claim_doc_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    document_status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    note_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'more_documents',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "more_id" },
        ]
      },
    ]
  });
};
