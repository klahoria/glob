const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('saved_contracts', {
    svc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    split_req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    apf_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    patient_email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    plans_array: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    selected_plan: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      comment: "one of the plans json "
    },
    patient_details: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "patient details which frontend user will give"
    },
    contract_service_record: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    doctor_record_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contract_patient_token: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "same in apf"
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1. Only plan array.     2. with selected plan.     3. patient details.     4. apf entry created."
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'saved_contracts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "svc_id" },
        ]
      },
    ]
  });
};
