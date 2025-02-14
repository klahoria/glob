const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profit_loss_stats_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_contract_date: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    claimed_approved_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    claim_paid_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    paid_to_paul_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    ptp_amt_last3m: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    ptp_amt_last6m: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    ptp_cl_paid_diff: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    ptp_cl_paid_approved_percent: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    ptp_cl_paid_percent: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    ptp_cl_paid_approved_percent_non_orp: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    ptp_cl_paid_percent_non_orp: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    Date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'profit_loss_stats_history',
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
