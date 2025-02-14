const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscription_reminder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null indicate system"
    },
    subscription_contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('Text','Email','Email & Text','Manual Token'),
      allowNull: false,
      comment: "enum value"
    },
    destination: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    reminder_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    source_from: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_failed: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0",
      comment: "0 for success,1 for failed"
    },
    date_sent: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    reminder_template_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    reminder_count: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "\/\/1 for 1st reminder, 2 for 2nd reminder,  3 for overdue contract"
    },
    pay_recurring_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subscription_reminder',
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
