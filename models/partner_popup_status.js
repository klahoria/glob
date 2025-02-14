const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_popup_status', {
    pps_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      unique: "doctor_id"
    },
    video_player_last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "when was last pop seen"
    },
    video_player_is_viewed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "if video is seen"
    },
    video_player_view_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 time in month"
    }
  }, {
    sequelize,
    tableName: 'partner_popup_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pps_id" },
        ]
      },
      {
        name: "doctor_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "partner_id" },
        ]
      },
    ]
  });
};
