const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_notifications', {
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
      comment: "1- Contract, 2: reminder"
    },
    from_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "can be patient_id"
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
    tableName: 'customer_notifications',
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
