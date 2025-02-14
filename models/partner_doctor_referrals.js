const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_doctor_referrals', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    referral_parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    referral_email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    invite_mobile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    refer_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_agent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 for doctor, 1 for agent"
    },
    notes: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    preferred_language: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "en"
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'partner_doctor_referrals',
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
