const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_financing_error', {
    pfe_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pf_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    source_id: {
      type: DataTypes.STRING(99),
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stripe_error: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    number_of_tries: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    payment_status: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payment_financing_error',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pfe_id" },
        ]
      },
    ]
  });
};
