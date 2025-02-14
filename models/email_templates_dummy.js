const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_templates_dummy', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    template_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: false
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
      allowNull: true
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
      comment: "\t1- active 0 -inactive\t"
    },
    template_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0: contract 1: customer, 2: business"
    }
  }, {
    sequelize,
    tableName: 'email_templates_dummy',
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
