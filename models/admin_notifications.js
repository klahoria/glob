const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_notifications', {
    an_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
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
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    notification_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    title: {
      type: DataTypes.STRING(100),
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
    action: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "where to redirect"
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
    tableName: 'admin_notifications',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "an_id" },
        ]
      },
    ]
  });
};
