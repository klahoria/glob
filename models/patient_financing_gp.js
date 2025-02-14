const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_financing_gp', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_guaranteed: {
      type: DataTypes.ENUM('0','1','2','3','4'),
      allowNull: false
    },
    function_impact: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    changed_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'patient_financing_gp',
    hasTrigger: true,
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
