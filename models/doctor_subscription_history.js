const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_subscription_history', {
    dsh_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ds_id: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    cost_deducted: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
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
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'doctor_subscription_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dsh_id" },
        ]
      },
    ]
  });
};
