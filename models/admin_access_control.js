const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_access_control', {
    aac_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allow_all: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "This will override all values"
    },
    latest_tab: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    partner_tab: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    edit_partner_percentage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    edit_partner_agent_percentage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    contracts_tab: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    disputes_option: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    payments_tab: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    unpaid_payments_option: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    guaranteed_transfers_option: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    approve_reject_claim: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    need_more_documents: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    pay_claim_doctor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    view_claim_requests: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    make_guaranteed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    doctor_report_option: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'admin_access_control',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aac_id" },
        ]
      },
    ]
  });
};
