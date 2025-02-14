const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settlement_doctor_payments', {
    dopa_id: {
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
    settlement_contract_id: {
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
    payment_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    payment_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: " 1 for pending,2 for success, 3 for failed"
    },
    amount_deducted: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    amount_refunded: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    number_of_installments: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    pay_to_doctor: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    recovery_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    payout_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    transaction_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    late_fee: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    late_fee_refunded: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    original_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    charged_amount: {
      type: DataTypes.DECIMAL(10,3),
      allowNull: false,
      defaultValue: 0.000
    },
    stripe_error: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
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
    },
    req_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'settlement_doctor_payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dopa_id" },
        ]
      },
      {
        name: "con",
        using: "BTREE",
        fields: [
          { name: "settlement_contract_id" },
        ]
      },
      {
        name: "doc",
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
      {
        name: "charge-id",
        using: "BTREE",
        fields: [
          { name: "charge_id", length: 25 },
        ]
      },
    ]
  });
};
