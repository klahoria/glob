const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_verification_notes', {
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    verification_reason: {
      type: DataTypes.STRING(400),
      allowNull: false
    },
    can_finance: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    admin_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    admin_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'doctor_verification_notes',
    timestamps: false
  });
};
