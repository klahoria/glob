const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invalid_email_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    regex_valid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    typo_valid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_disposable: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    mx_valid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    smtp_valid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    domain_valid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    mailbox_valid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'invalid_email_logs',
    timestamps: true,
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
