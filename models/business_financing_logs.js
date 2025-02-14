const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_financing_logs', {
    bfl_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    event_name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "finance_basic_details, plan_selection_screen, customer_selection, customer_profile consent_screen, payment_screen, dp_card_added, backup_card_added, recurring_card_added, contract_completed"
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    device_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 - web 1-andorid 2-ios"
    }
  }, {
    sequelize,
    tableName: 'business_financing_logs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bfl_id" },
        ]
      },
    ]
  });
};
