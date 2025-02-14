const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_referrals', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    referral_code: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    referred_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    referred_code: {
      type: DataTypes.STRING(9),
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'business_referrals',
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
