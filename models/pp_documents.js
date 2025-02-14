const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pp_documents', {
    pp_doc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doc_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doc_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ppr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pp_subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
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
    }
  }, {
    sequelize,
    tableName: 'pp_documents',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pp_doc_id" },
        ]
      },
    ]
  });
};
