const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_contract', {
    contract_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    contract_code: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "code"
    },
    plan_id: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    contract_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    contract_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'patient_contract',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
      {
        name: "code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contract_code" },
        ]
      },
      {
        name: "contract_sta",
        using: "BTREE",
        fields: [
          { name: "contract_status" },
        ]
      },
      {
        name: "contract_date",
        using: "BTREE",
        fields: [
          { name: "contract_date" },
        ]
      },
      {
        name: "patient_contract_idx_contract_id",
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
    ]
  });
};
