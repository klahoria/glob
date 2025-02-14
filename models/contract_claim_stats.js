const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contract_claim_stats', {
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    paid_to_paul_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    paid_to_paul_count: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    ptp_amt_last3m: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ptp_count_last3m: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    ptp_amt_last6m: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    ptp_count_last6m: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    total_claimed_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    claim_paid_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    claim_recovery_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    claim_recovered_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    claimed_payment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    claimed_approved_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    claim_paid_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    claim_recovered_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    claim_recovery_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    claimed_payment_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    claimed_approved_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    total_claimed_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    claimed_approved_amount_non_orp: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    claim_paid_amount_non_orp: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    last_fetched: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'contract_claim_stats',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "contract_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
      {
        name: "contract_id1",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
      {
        name: "contract_id_2",
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
    ]
  });
};
