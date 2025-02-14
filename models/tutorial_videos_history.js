const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tutorial_videos_history', {
    note_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vid_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vid_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Tutorial Video name to be displayed on the screen\t"
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    thumb_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "1(doctor)2(patient)3(partner)\t"
    },
    is_guaranteed: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "(1) For Guaranteed industry only "
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    action: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "1 for edit, 2 for state(active or inactive)"
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tutorial_videos_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "note_id" },
        ]
      },
    ]
  });
};
