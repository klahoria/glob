const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_alerts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    payment_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    patient_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contract_patient_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cardholder_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'payment_alerts',
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
