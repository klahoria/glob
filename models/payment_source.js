const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_source', {
    payment_source_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    payment_source: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    stripe_flat_fee: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 30
    },
    stripe_percentage_fee: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 2.90
    },
    maximum_limit: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: -1
    }
  }, {
    sequelize,
    tableName: 'payment_source',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_source_type" },
        ]
      },
    ]
  });
};
