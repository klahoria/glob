const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_business_card', {
    business_card_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    partner_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    partner_code: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    designation_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    status_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    applied_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'partner_business_card',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "business_card_id" },
        ]
      },
    ]
  });
};
