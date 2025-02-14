const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promotional_offer_types', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 => Inactive, 1 => Active"
    }
  }, {
    sequelize,
    tableName: 'promotional_offer_types',
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
