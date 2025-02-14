const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_claim_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    missing_payment_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dopa_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pl_percent: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    active_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    delay_days: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_by: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "CUSTOMER_RECURRING: 1,   CUSTOMER_PAYOFF: 2,   CUSTOMER_FULL_AMOUNT: 3,   ADMIN_RECURRING: 4,   ADMIN_PAYOFF: 5,   ADMIN_FULL_AMOUNT: 6,   ARRANGEMENT_CRON: 7,   FRIDAY_CRON: 8"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'payment_claim_details',
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
      {
        name: "dopa_id",
        using: "BTREE",
        fields: [
          { name: "dopa_id" },
        ]
      },
    ]
  });
};
