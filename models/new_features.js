const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('new_features', {
    feature_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    feature_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    feature_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    feature_subtext: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    icon_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    landing_page_icon_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    button_label: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    redirection_state: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'new_features',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "feature_id" },
        ]
      },
    ]
  });
};
