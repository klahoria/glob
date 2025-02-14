const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscription_contracts', {
    subscription_contract_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plan_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    plan_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "1: Active, 2: Overdue, 3: Cancelled"
    },
    ip_address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    last_cron_payment: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'subscription_contracts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subscription_contract_id" },
        ]
      },
    ]
  });
};
