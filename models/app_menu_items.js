const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_menu_items', {
    menu_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    menu_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    all_restricted_items: {
      type: DataTypes.TEXT,
      allowNull: true
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
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'app_menu_items',
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
