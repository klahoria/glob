const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('treatment_codes', {
    code_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    user_friendly_description: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'treatment_codes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code_id" },
        ]
      },
    ]
  });
};
