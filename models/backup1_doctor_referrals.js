const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('backup1_doctor_referrals', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: "doc"
    },
    referral_code: {
      type: DataTypes.STRING(9),
      allowNull: false,
      unique: "referal"
    },
    partner_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    partner_referral_code: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    referred_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'backup1_doctor_referrals',
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
      {
        name: "doc",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
      {
        name: "referal",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "referral_code", length: 7 },
        ]
      },
      {
        name: "partner_id",
        using: "BTREE",
        fields: [
          { name: "partner_id" },
        ]
      },
    ]
  });
};
