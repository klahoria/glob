const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_error_webhook', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    feedback_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    error_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1: bounce, 2: complaint"
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    sub_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
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
    tableName: 'email_error_webhook',
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
      {
        name: "error_email_id",
        using: "BTREE",
        fields: [
          { name: "message_id" },
        ]
      },
      {
        name: "email_webhook_idx_message_id",
        using: "BTREE",
        fields: [
          { name: "message_id" },
        ]
      },
    ]
  });
};
