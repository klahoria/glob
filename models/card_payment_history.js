const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('card_payment_history', {
    cph_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: false
    },
    card_id: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    admin_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    charge_outcome: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    charge_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    pf_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    amount_deducted: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    collection_amount_only: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    late_fee: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    decline_code_id: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    payment_by: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-cron,1-manual"
    },
    action_from: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0: patient_list, 1:android,2:isObject, 3: open panel, 4: Daily cron, 5: friday cron"
    },
    payment_type: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 2,
      comment: "2-recurring,16-full amount"
    },
    error_in_billing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_mail_sent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_pending: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1- ACH payment pending , 0-Not pending"
    },
    try_again_response: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=Not try, 1=Success, 2=Fail"
    },
    try_again_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'card_payment_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cph_id" },
        ]
      },
      {
        name: "contract_id",
        using: "BTREE",
        fields: [
          { name: "contract_id" },
          { name: "source_id" },
        ]
      },
      {
        name: "date_added",
        using: "BTREE",
        fields: [
          { name: "date_added" },
        ]
      },
      {
        name: "payment_type",
        using: "BTREE",
        fields: [
          { name: "payment_type" },
        ]
      },
    ]
  });
};
