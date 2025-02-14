const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscription_payments', {
    sapa_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    subscription_contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "(-) represent doc source"
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    amount_deducted: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    pay_to_doctor: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    transaction_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    stripe_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "17-ach payments, 20-first recurring failed for in house"
    },
    stripe_fee: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: false
    },
    application_fee: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    original_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'subscription_payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sapa_id" },
        ]
      },
    ]
  });
};
