const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('push_notification_templates', {
    push_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    template_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    notification_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "for taking actions on apps"
    },
    content: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    template_variable: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'push_notification_templates',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "push_id" },
        ]
      },
    ]
  });
};
