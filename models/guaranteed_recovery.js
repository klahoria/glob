const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guaranteed_recovery', {
    recovery_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dopa_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    paid_to_denefits: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    remaining_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    payment_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'guaranteed_recovery',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "recovery_id" },
        ]
      },
    ]
  });
};
