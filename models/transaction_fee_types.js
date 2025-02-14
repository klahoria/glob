const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction_fee_types', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "name"
    },
    default_json: {
      type: DataTypes.JSON,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaction_fee_types',
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
      {
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
