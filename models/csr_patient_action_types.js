const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('csr_patient_action_types', {
    action_type: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action_value: {
      type: DataTypes.STRING(250),
      allowNull: false,
      comment: "38, 39 for contract level"
    }
  }, {
    sequelize,
    tableName: 'csr_patient_action_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "action_type" },
        ]
      },
    ]
  });
};
