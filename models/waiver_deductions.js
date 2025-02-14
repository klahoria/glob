const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('waiver_deductions', {
    w_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    charge_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    actual_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    deducted_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    waiver_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'waiver_deductions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "w_id" },
        ]
      },
    ]
  });
};
