const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settlement_contracts', {
    settlement_contract_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    settlement_contract_code: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "settlement reminder token"
    },
    contract_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    settlement_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    secondary_source_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recurring_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    number_of_payments: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    remaining_payments: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    missing_payment_counts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    next_missing_payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    settlement_contract_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1 for active, 2 for overdue, 3 for cancel, 4 for completed"
    },
    credit_action: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 for not applicable,1 for paid in full , 2 for completely deleted"
    },
    stripe_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stripe_metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customer_signature: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancelled_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_overdue_cron_attempt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'settlement_contracts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "settlement_contract_id" },
        ]
      },
    ]
  });
};
