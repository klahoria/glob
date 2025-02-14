const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_notifications', {
    bn_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1- Payment 2-Claims 3- Payout"
    },
    admin_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    from_type: {
      type: DataTypes.ENUM('doctor','patient','partner','admin'),
      allowNull: false,
      defaultValue: "doctor"
    },
    from_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "can be Doctor\/Patient\/Partner"
    },
    pn_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "push notification content id"
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Message to be displayed"
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    read_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sent_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1-deleted 0-not deleted"
    }
  }, {
    sequelize,
    tableName: 'business_notifications',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bn_id" },
        ]
      },
    ]
  });
};
