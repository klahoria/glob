const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stripe_financial_account', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fca_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "fca_id"
    },
    last4: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stripe_account_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doctor_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stripe_financial_account',
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
        name: "fca_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fca_id" },
        ]
      },
    ]
  });
};
