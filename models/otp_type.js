const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const OTPTYPE = sequelize.define('otp_type', {
    otp_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    expiry_time_in_sec: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1800,
      comment: "expiry time in seconds"
    }
  }, {
    sequelize,
    tableName: 'otp_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "otp_type" },
        ]
      },
    ]
  });

  OTPTYPE.associate = function (models) {
    OTPTYPE.hasMany(models.doctor_register_otp, {
      foreignKey: 'otp_type',
      sourceKey: 'otp_type',
      as: 'doctor_otp'
    })
  }

  return OTPTYPE;

};
