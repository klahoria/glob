const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_auth_token_mapping', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    para_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    auth_token: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'partner_auth_token_mapping',
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
