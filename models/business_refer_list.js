const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_refer_list', {
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
      allowNull: true
    },
    referral_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    referral_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    referral_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_sms_sent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_email_sent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'business_refer_list',
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
