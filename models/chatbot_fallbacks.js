const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chatbot_fallbacks', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    panel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "refer to denefit_panels table"
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fallback_reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "admin\/doctor\/patient\/partner"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "admin_id\/doctor_id\/patient_id\/partner_id"
    }
  }, {
    sequelize,
    tableName: 'chatbot_fallbacks',
    timestamps: true,
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
