const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_payments', {
    papa_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    para_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    partner_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ar_token: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 2
    },
    share_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1. Recurring, 2.FIxed"
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    amount_deducted: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    pay_to_partner: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false
    },
    stripe_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "17-ach payments, 7-blocked partner"
    },
    transfer_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    refunded_amount: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    amount_reversed: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    reverse_transfer_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    dispute_status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "1-charged partner, 2-dispute won,3-dispute lost"
    },
    nth_installment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    share_from_doctor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "the partner share is deducted from doctor. 1-yes,0-no"
    },
    partner_active_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    is_urgent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    tableName: 'partner_payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "papa_id" },
        ]
      },
      {
        name: "charge_id",
        using: "BTREE",
        fields: [
          { name: "charge_id" },
        ]
      },
      {
        name: "contract_id",
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
      {
        name: "partner_id",
        using: "BTREE",
        fields: [
          { name: "partner_id" },
        ]
      },
      {
        name: "stripe_status",
        using: "BTREE",
        fields: [
          { name: "stripe_status" },
        ]
      },
      {
        name: "transfer_id",
        using: "BTREE",
        fields: [
          { name: "transfer_id" },
        ]
      },
    ]
  });
};
