const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_product_configuration', {
    product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    env: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1: Test, 2: Live"
    },
    product_access_key: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    access_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    secret_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    api_version: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'email_product_configuration',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
