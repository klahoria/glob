const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claim_status', {
    claim_status_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    claim_status: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'claim_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "claim_status_id" },
        ]
      },
    ]
  });
};
