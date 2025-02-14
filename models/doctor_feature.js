const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_feature', {
    doctor_feature_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    feature_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    person_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1-Doctor,2-User"
    }
  }, {
    sequelize,
    tableName: 'doctor_feature',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_feature_id" },
        ]
      },
    ]
  });
};
