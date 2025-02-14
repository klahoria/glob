const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscription_transaction', {
    st_id: {
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
    cost_deducted: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    setup_cost_deducted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    charge_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment_status: {
      type: DataTypes.ENUM('SUCCESS','FAILED'),
      allowNull: false
    },
    payment_error: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "stripe error"
    },
    payment_error_show: {
      type: DataTypes.STRING(250),
      allowNull: true,
      comment: "error message to show to user"
    },
    is_cron: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
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
    isActive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'subscription_transaction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "st_id" },
        ]
      },
    ]
  });
};
