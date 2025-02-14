const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claim_docs', {
    claim_doc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    temp_claim_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    claim_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    doc_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doc_file: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    document_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'claim_docs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "claim_doc_id" },
        ]
      },
    ]
  });
};
