const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_registration_document', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    practice_license: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    professional_license: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    certification_license: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_proof_front: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_proof_back: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    signature: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_registration_document',
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
