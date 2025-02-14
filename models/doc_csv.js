const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doc_csv', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'First Name': {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    'Last Name': {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    mail_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'doc_csv',
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
