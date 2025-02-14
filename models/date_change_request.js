const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('date_change_request', {
    dcr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    patient_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    old_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    new_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    contract_status: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    request_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1-generated,2-pending,3-rejected,4-approved, 5-Expired, 6-Canceled"
    },
    updated_by: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-Admin 2-Doctor 3-Patient 4- System"
    },
    amount_to_be_charged: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    },
    reason_generated: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reason_rejected: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'date_change_request',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dcr_id" },
        ]
      },
    ]
  });
};
