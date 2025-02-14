const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_transaction_fee', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transaction_fee_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    default_payment_source_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3,
      comment: "This payment_source_type will be considered to calculate transaction fee if no payment type is provided"
    },
    metrics: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'doctor_transaction_fee',
    timestamps: true,
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
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
