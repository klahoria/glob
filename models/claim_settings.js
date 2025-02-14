const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claim_settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pl_min: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    pl_max: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    payment_by: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "CUSTOMER_RECURRING: 1,   CUSTOMER_PAYOFF: 2,   CUSTOMER_FULL_AMOUNT: 3,   ADMIN_RECURRING: 4,   ADMIN_PAYOFF: 5,   ADMIN_FULL_AMOUNT: 6,   ARRANGEMENT_CRON: 7,   FRIDAY_CRON: 8"
    },
    active_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "0-inactive, 1-active"
    },
    delay_day_min: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    delay_day_max: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    instant_claim_start: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    instant_claim_end: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deduction_percent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    stop_doctor_transfer: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "If 1 then we reserve the payment of doctor as ORP, otherwise transfer the amount to doctor directly"
    }
  }, {
    sequelize,
    tableName: 'claim_settings',
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
