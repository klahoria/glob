const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bulk_upload_records', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    batch_token: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    file_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    mobile_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email_address: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    patient_ssn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    total_amount_owed: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    debt_duration: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    services_provided: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_discount: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0 pending, 1 tried and success, 2 tried and failed"
    },
    proposal_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contract_patient_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    language_preferred: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "en"
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
    tableName: 'bulk_upload_records',
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
