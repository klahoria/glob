const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('speciality_type', {
    speciality_type: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    speciality_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'speciality_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "speciality_type" },
        ]
      },
    ]
  });
};
