const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wordpress_table', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    client_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    business_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    admin_url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    iframe_url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    iframe_token: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    phone_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    valid_upto: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'wordpress_table',
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
