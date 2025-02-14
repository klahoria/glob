const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reminder_templates', {
    reminder_template_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    reminder_template_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    min_range: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    max_range: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email_template_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'email_templates',
        key: 'template_id'
      }
    },
    mobile_template_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'mobile_template',
        key: 'id'
      }
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    is_cron: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'reminder_templates',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reminder_template_id" },
        ]
      },
      {
        name: "mobile",
        using: "BTREE",
        fields: [
          { name: "mobile_template_id" },
        ]
      },
      {
        name: "email_template_id",
        using: "BTREE",
        fields: [
          { name: "email_template_id" },
        ]
      },
    ]
  });
};
