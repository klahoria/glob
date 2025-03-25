const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  const DoctorVerification = sequelize.define('doctor_verification', {
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    verification_status: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    debit_negative_balances: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    payouts_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    account_details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    capabilities_transfer_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    pending_verfication: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fields_needed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    due_by: {
      type: DataTypes.DATE,
      allowNull: true
    },
    disabled_reason: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    details_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    details: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_verification',
    timestamps: false,
    indexes: [
      {
        name: "doctor_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
    ]
  });

  DoctorVerification.associate = (models) => {
    DoctorVerification.belongsTo(models.doctor_profile, {
      foreignKey: 'doctor_id',
      as: 'doctor_verification'
    });
  };

  return DoctorVerification;
};
