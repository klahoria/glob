const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('invalid_email_cron', {
    invalid_email_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    person_type: {
      type: DataTypes.ENUM('doctor','patient'),
      allowNull: false,
      defaultValue: "patient"
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cron_type: {
      type: DataTypes.ENUM('first_day_reminder','recurring_reminder','payment_overdue_reminder','micro_deposit_reminder'),
      allowNull: false
    },
    is_duplicate: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'invalid_email_cron',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "invalid_email_id" },
        ]
      },
    ]
  });
};
