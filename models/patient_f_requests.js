const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_f_requests', {
    pfr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    is_doctor_registered: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    patient_first_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    patient_last_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    patient_mobile: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    patient_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    patient_ssn: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    dl_number: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    patient_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true,
      defaultValue: 0
    },
    patient_gender: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    employer_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    employer_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    employer_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    employer_city_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true,
      defaultValue: 0
    },
    annual_income: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'patient_f_requests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pfr_id" },
        ]
      },
    ]
  });
};
