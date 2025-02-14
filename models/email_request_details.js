const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_request_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    product_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email_from: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email_to: {
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
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    reply_to: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: not-attempt, 1: success, 2: fail"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'email_request_details',
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
