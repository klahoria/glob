const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_sent_status', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    to_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    from_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "from mobile(billing mobile)"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sms_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-started, 1 delivered, 2 error, 3 Sent"
    },
    error: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    response: {
      type: DataTypes.JSON,
      allowNull: true
    },
    sid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'sms_sent_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
