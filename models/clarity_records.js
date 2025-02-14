const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clarity_records', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ip_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: Request panel, 1: Patient, 2: Doctor, 3: Partner, 4: For Agent (agent_profile), 5: For Enterprise (enterprise_profile)"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "IF type = 0 AND patient_id = 0 AND token is NOT NULL then token is contract_patient_token (split_app_request table), IF type = 0 AND patient_id != 0 AND token is NOT NULL then token is payment_link_token (payment_process_record table)"
    },
    clarity_id: {
      type: DataTypes.STRING(100),
      allowNull: true
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
    tableName: 'clarity_records',
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
