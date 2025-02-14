const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reseller_referrals', {
    reseller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    referral_code: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    referred_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reseller_referrals',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reseller_id" },
        ]
      },
      {
        name: "reseller_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reseller_id" },
        ]
      },
    ]
  });
};
