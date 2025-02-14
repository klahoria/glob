const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('website_theme', {
    wt_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    theme_meta: {
      type: DataTypes.JSON,
      allowNull: false
    },
    default_data: {
      type: DataTypes.JSON,
      allowNull: false
    },
    old_default_data: {
      type: DataTypes.JSON,
      allowNull: false
    },
    isActive: {
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
    tableName: 'website_theme',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wt_id" },
        ]
      },
    ]
  });
};
