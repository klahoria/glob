const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_contract_share', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    share_json: {
      type: DataTypes.JSON,
      allowNull: false
    },
    contract_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    json_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'partner_contract_share',
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
