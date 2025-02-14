const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_profile_unregistered', {
    doctor_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_first_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doctor_last_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doctor_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Practice_Name: {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(29),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    County: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    'Doctor Name': {
      type: DataTypes.STRING(31),
      allowNull: true
    },
    doctor_email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    Gender: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Title: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Specialty: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    'SIC Code': {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Employees: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Sales: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    Latitude: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    Longitude: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    Website: {
      type: DataTypes.STRING(21),
      allowNull: true
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'doctor_profile_unregistered',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
    ]
  });
};
