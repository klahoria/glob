const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('missing_notes', {
    note_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    missing_payment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    document_needed: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    claim_status_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    },
    doctor_stats: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "doctor stats json"
    }
  }, {
    sequelize,
    tableName: 'missing_notes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "note_id" },
        ]
      },
      {
        name: "missing_payment_id",
        using: "BTREE",
        fields: [
          { name: "missing_payment_id" },
        ]
      },
    ]
  });
};
