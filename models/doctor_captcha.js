const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_captcha', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    captcha_value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    device_id: {
      type: DataTypes.STRING(254),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'doctor_captcha',
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
