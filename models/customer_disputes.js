const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_disputes', {
    cus_dispute_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pp_subscription_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    charge_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    csr_req_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "req_id of mapped assignment"
    },
    reason_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    payment_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    patient_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patient_mobile: {
      type: DataTypes.STRING(20),
      allowNull: false
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
    tableName: 'customer_disputes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cus_dispute_id" },
        ]
      },
    ]
  });
};
