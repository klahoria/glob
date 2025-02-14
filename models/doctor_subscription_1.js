const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_subscription_1', {
    ds_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sp_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    next_sp_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_grace_period: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cost_deducted: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    next_cost_deducted: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    cost_changed_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "if admin changed the actice plan amount"
    },
    downgrade_cost_changed_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00,
      comment: "if admin changed the downgrade plan amount"
    },
    renewal_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_renewal_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    sub_cancel: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "user cancelled subscription"
    },
    plan_transition: {
      type: DataTypes.ENUM('UPGRADE','DOWNGRADE','SAME'),
      allowNull: false,
      defaultValue: "SAME"
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "recurring source id"
    },
    days_left: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    last_cron_attempt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isActive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sent_notification: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'doctor_subscription_1',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ds_id" },
        ]
      },
    ]
  });
};
