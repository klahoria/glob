const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('webhook_failed_emails', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    payout_id: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    doctor_account_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.ENUM('PENDING','DONE'),
      allowNull: false,
      defaultValue: "PENDING"
    }
  }, {
    sequelize,
    tableName: 'webhook_failed_emails',
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
