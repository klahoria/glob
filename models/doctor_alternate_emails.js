const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_alternate_emails', {
    dae_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    alternate_email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    send_monthly_email: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    send_weekly_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    send_daily_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1 daily payout email"
    },
    verification_token: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    verified_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    added_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_alternate_emails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dae_id" },
        ]
      },
    ]
  });
};
