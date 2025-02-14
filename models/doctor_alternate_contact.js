const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_alternate_contact', {
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
    alternate_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    alternate_email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    alternate_phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    alternate_role: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email_verification_token: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    phone_verification_token: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    mobile_otp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_otp_sent: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_verified: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    is_email_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_phone_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_alternate_contact',
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
