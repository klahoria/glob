const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enterprise_access_menu_map', {
    access_menu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    menu_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    restricted_items: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "0"
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modified_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'enterprise_access_menu_map',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "access_menu_id" },
        ]
      },
    ]
  });
};
