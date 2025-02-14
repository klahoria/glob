const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_register_otp', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    otp: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    otp_type: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    verified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_register_otp',
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
