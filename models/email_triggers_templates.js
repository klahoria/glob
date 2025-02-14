const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_triggers_templates', {
    template_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    template_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(100),
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
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'email_triggers_templates',
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
