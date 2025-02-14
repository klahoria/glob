const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persona_verification', {
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
    persona_inquiry_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    government_id_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    business_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    persona_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    practice_ein: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    document_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    document: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'persona_verification',
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
