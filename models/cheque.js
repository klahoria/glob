const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheque', {
    cheque_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    pf_ids: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true,
      defaultValue: 0.00
    },
    date_paid: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cheque',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cheque_id" },
        ]
      },
    ]
  });
};
