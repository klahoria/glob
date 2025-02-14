const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_dispute_documents', {
    document_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pp_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pp_subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    document_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doc_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      defaultValue: "0",
      comment: "0-pending 1-need_docs, 2-submitted, 3-verified"
    },
    is_deleted: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    doc_note: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    need_doc_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    show_document: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: false,
      defaultValue: "3",
      comment: "1-admin, 2-doctor, 3-both"
    }
  }, {
    sequelize,
    tableName: 'doctor_dispute_documents',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "document_id" },
        ]
      },
    ]
  });
};
