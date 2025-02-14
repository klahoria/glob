const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settlement_payments_arrangement', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ppr_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_reminder_payment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_inactive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    settlement_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    settlement_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    settlement_slot_type: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: true,
      comment: "1-morning, 2-afternoon, 3-evening"
    },
    status: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: true,
      defaultValue: "1",
      comment: "1-Pending, 2-Success, 3-Failed"
    },
    stripe_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stripe_metadata: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'settlement_payments_arrangement',
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
