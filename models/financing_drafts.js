const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('financing_drafts', {
    ref_id: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    plan_type: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    screen_name: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    services: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    down_payment: {
      type: DataTypes.DOUBLE(5,2),
      allowNull: true
    },
    interest_rate: {
      type: DataTypes.DOUBLE(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    selected_plan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    patient_email: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "contract_id"
    },
    apf_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_created: {
      type: DataTypes.ENUM('0','1','2','3'),
      allowNull: false,
      defaultValue: "0",
      comment: "0 -> not created, 1 -> created, 2 -> canceled, 3 -> Reassign"
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_type: {
      type: DataTypes.ENUM('1','2','3','4'),
      allowNull: false,
      comment: "1 --> !0%, 2 --> 0%, 3 --> InHouse, --> EZ"
    },
    selected_contract_index: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'financing_drafts',
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
      {
        name: "contract_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
    ]
  });
};
