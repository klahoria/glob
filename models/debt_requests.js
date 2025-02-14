const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('debt_requests', {
    crc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    business_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    business_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    business_mobile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    patient_ssn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contact_time: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    debt_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    recurring_months: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    discount_percent: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "0"
    },
    discount_to_customer: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0.00
    },
    discount_history: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    debt_duration: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    more_options: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    csr_req_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    service_breakdown: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    proposal_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1 for Polite, 2 for Medium and 3 for Aggressive"
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
    tableName: 'debt_requests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "crc_id" },
        ]
      },
      {
        name: "payment_token",
        using: "BTREE",
        fields: [
          { name: "payment_token" },
        ]
      },
    ]
  });
};
