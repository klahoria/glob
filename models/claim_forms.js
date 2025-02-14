const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claim_forms', {
    claim_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    temp_claim_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    claim_status_id: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    treatment_completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    service_breakdown: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "service breakdown for claim"
    },
    exception: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-no exception,1-exception,2-resolved"
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
    tableName: 'claim_forms',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "claim_id" },
        ]
      },
    ]
  });
};
