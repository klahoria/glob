const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_type', {
    payment_type: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pt_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "payment description not be shown on frontend"
    }
  }, {
    sequelize,
    tableName: 'payment_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_type" },
        ]
      },
    ]
  });
};
