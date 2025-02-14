const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buss_docs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doc_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doc_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doc_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_approved: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_rejected: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-deleted 0-not deleted"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    validity_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    approved_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_approved_email_sent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    is_saved: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'buss_docs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
