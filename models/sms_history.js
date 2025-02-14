const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_history', {
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
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-not tried, 1 sent, 2 error"
    },
    status_text: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    contract_remidner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    rc_id: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    track_retry: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    error: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pr_token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "proposal reminder token of arv2 cron to check multilpe sms"
    },
    split_req_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_manual: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    twilio_sid: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sms_history',
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
