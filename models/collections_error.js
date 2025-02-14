const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collections_error', {
    ce_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ce_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    decline_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    color_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    billing_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'collections_error',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ce_id" },
        ]
      },
    ]
  });
};
