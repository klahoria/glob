const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enterprise_menu_items', {
    menu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    menu_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    all_restricted_items: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "comma seprated fields which are checked on frontend"
    },
    icon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    in_order: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    only_path: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "0",
      comment: "if the menu item is only path, not the item to display"
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'enterprise_menu_items',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "menu_id" },
        ]
      },
    ]
  });
};
