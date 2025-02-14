const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tutorial_videos', {
    vid_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vid_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Tutorial Video name to be displayed on the screen"
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "video description"
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: false,
      comment: "youtube vid url"
    },
    thumb_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    duration: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1(doctor)2(patient)3(partner)"
    },
    vid_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "vid_order by order"
    },
    is_guaranteed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "(1) For Guaranteed industry only "
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tutorial_videos',
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
