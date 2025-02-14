const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ar_bsa_form', {
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
    doctor_signature: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doctor_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    support_signature: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    support_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'ar_bsa_form',
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
