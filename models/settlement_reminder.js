const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('settlement_reminder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    offer_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_expired: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_demand_letter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_scan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    link_opened_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    link_last_opened: {
      type: DataTypes.DATE,
      allowNull: true
    },
    email_read_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    last_email_read: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reminder_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    offer_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
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
    tableName: 'settlement_reminder',
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
