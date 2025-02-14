const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('multi_language', {
    lan_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    original_lan_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lan_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'multi_language',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lan_code" },
        ]
      },
    ]
  });
};
