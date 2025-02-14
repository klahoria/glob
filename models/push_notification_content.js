const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('push_notification_content', {
    pn_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_type: {
      type: DataTypes.ENUM('doctor','partner','patient'),
      allowNull: false,
      defaultValue: "doctor"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flag: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_background: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=>Notification will show if application is running at background or closed, 1=> push notification always show"
    },
    notification_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_android_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "this is to active and deactivate the notification for android, 1=>Notification will trigger, 0=> notification will not trigger"
    },
    is_web_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1=>trigger notification to website, 0=> donot trigger notification"
    },
    is_ios_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1=>trigger notification to ios, 0=> donot trigger notification"
    }
  }, {
    sequelize,
    tableName: 'push_notification_content',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pn_id" },
        ]
      },
    ]
  });
};
