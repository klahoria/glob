const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claim_drafts', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    temp_claim_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    claim_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    treatment_completed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    missing_payment_id: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    service_breakdown: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    is_instant_claim: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_submitted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    claim_end_date: {
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
    tableName: 'claim_drafts',
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
