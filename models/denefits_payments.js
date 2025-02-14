const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('denefits_payments', {
    depa_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    transfer_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false
    },
    amount_reversed: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    transfer_group: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    late_fee: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    late_fee_refunded: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    edit_recurring_fee: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    stripe_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'denefits_payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "depa_id" },
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
        name: "charge_id",
        using: "BTREE",
        fields: [
          { name: "charge_id", length: 25 },
        ]
      },
      {
        name: "charge_id_2",
        using: "BTREE",
        fields: [
          { name: "charge_id" },
        ]
      },
    ]
  });
};
