const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guarantee_type', {
    guarantee_type: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    guarantee_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'guarantee_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "guarantee_type" },
        ]
      },
    ]
  });
};
