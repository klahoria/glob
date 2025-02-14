const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('edit_contract_records', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    old_values: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    new_values: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    amount_charged: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    transaction_fees: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ach_payment: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "0 = not ach, 1 = ach initiated, 2 = ach success, 3 = ach failed"
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
    tableName: 'edit_contract_records',
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
