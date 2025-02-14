const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auto_ssn_update', {
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auto_ssn_update',
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
};
