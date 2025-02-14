const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ach_cron_payment_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recurring_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pf_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 3
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    error_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'ach_cron_payment_history',
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
