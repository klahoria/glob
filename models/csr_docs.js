const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('csr_docs', {
    csr_doc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "csr req id"
    },
    note_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "csr req note id"
    },
    file_url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    thumb_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    deleted_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "admin id"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'csr_docs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "csr_doc_id" },
        ]
      },
      {
        name: "req_id",
        using: "BTREE",
        fields: [
          { name: "req_id" },
        ]
      },
    ]
  });
};
