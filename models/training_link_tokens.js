const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_link_tokens', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    token_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    scope: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    refresh_token: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    access_token: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    auth_email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    expiry_date: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'training_link_tokens',
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
