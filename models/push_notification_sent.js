const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('push_notification_sent', {
    pns_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "this is id to whom notification will sent"
    },
    user_type: {
      type: DataTypes.ENUM('doctor','partner','patient',''),
      allowNull: false,
      defaultValue: "doctor"
    },
    pn_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "this is push notification content id"
    },
    device_token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bn_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "business notification id"
    },
    sent_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'push_notification_sent',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pns_id" },
        ]
      },
    ]
  });
};
