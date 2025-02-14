const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('old_email_templates', {
    template_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    template_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    template_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    template_variables: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    attachment_path: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "0"
    },
    notes: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    dnd_doctor_stop: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    dnd_patient_stop: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1- active 0 -inactive"
    }
  }, {
    sequelize,
    tableName: 'old_email_templates',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "template_id" },
        ]
      },
    ]
  });
};
