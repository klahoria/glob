const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_popup_status', {
    dps_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      unique: "doctor_id"
    },
    mark_status_updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "marketing popup last updated at time"
    },
    marketing_popup_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-ok 2-cancelled 3-exit"
    },
    zero_percent_video_view_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Max 5 views"
    },
    zero_percent_video_is_veiwed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    payment_process_video_view_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    payment_process_video_is_viewed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    practina_video_view_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    practina_video_is_viewed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    practina_video_total_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    practina_video_learn_more: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "How many times business click on learn more"
    },
    practina_video_visit_link: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "How many times business click on visit now link"
    },
    revive_add_cross_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    revive_training: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    revive_finance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    revive_callback: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    revive_add_bank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    revive_last_updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'doctor_popup_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dps_id" },
        ]
      },
      {
        name: "doctor_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
    ]
  });
};
