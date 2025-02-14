const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('panel_video_links', {
    vid_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    video_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    video_link: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    video_app_link: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    panel_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1: Business, 2: customer, 3: partner"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'panel_video_links',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vid_id" },
        ]
      },
    ]
  });
};
