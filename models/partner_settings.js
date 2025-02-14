const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_settings', {
    partner_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    watch_days: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 90
    },
    no_of_business: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    total_contracts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    show_domain_help: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    total_financed_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1000000
    },
    total_agents: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    old_share: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Recurring Share"
    },
    new_share: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Fixed Share"
    },
    active_json: {
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
    tableName: 'partner_settings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "partner_id" },
        ]
      },
      {
        name: "partner_id",
        using: "BTREE",
        fields: [
          { name: "partner_id" },
        ]
      },
    ]
  });
};
