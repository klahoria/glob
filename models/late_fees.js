const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('late_fees', {
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    missing_payments: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_late_fees: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    pf_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    err_message: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'late_fees',
    timestamps: false
  });
};
