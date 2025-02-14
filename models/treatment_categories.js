const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('treatment_categories', {
    category_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_custom: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'treatment_categories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
    ]
  });
};
