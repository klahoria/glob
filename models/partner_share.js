const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_share', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    para_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    partner_json: {
      type: DataTypes.STRING(7500),
      allowNull: false
    },
    partner_json_new: {
      type: DataTypes.STRING(7500),
      allowNull: false
    },
    contract_type: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_new: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    new_share: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Fixed Share (Distribution Amount)"
    },
    old_share: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Recurring Share"
    }
  }, {
    sequelize,
    tableName: 'partner_share',
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
    ]
  });
};
