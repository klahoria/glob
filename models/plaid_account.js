const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plaid_account', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    link_session_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bank_account_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    plaid_access_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    temp_token: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "temporary token by using which the popup is intiated"
    },
    item_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Instant Auth, 1- Micro Deposit"
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    panel: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1- Customer Panel 2- Split Panel 3- Admin Panel"
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1- deleted 0- not deleted"
    },
    reauth_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    asset_report_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    asset_report_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    assets_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_assets_webhook: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 - pending 1- success 2-error"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'plaid_account',
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
        name: "patient_id",
        using: "BTREE",
        fields: [
          { name: "patient_id" },
        ]
      },
    ]
  });
};
