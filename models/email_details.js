const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
      allowNull: false
    },
    bcc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    html: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'email_details',
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
