const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contract_changes_requests', {
    ccr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    request_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1- edit contract, 2- date change, 3- cancel contract"
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    new_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    old_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    old_financing_values: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    new_financing_values: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    amount: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1- sent, 2- paid, 3- reject, 4- expired"
    },
    payment_depa_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment_token: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pfh_id: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'contract_changes_requests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ccr_id" },
        ]
      },
    ]
  });
};
