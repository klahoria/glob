const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('draft_contract', {
    dc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_type: {
      type: DataTypes.ENUM('PP','AR','PLAN'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'draft_contract',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dc_id" },
        ]
      },
    ]
  });
};
