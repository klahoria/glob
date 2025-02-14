const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_response_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email_to: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email_from: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bcc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reply_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    response_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    view_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'email_response_details',
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
