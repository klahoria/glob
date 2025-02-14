const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_error', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    err: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'email_error',
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
        name: "email",
        using: "BTREE",
        fields: [
          { name: "id" },
          { name: "email", length: 60 },
        ]
      },
    ]
  });
};
