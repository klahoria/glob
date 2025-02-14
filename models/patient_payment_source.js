const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_payment_source', {
    source_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    card_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "3 for both rec+dwn,2 fr only dwn,1 fr only rec"
    },
    token: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: "token"
    },
    payment_source_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    is_new_apple_google_pay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: Default, 1: New google pay apple pay cards (Using for recurring also)"
    },
    brand: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last4: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    country_code: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "US"
    },
    is_deleted: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    last_error: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    information_provided: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    exp_month: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    exp_year: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    fingerprint: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    funding: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bank_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "0- stripe 1-plaid 2: apple pay 3 google pay"
    },
    mass_update: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_refreshed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    verified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'patient_payment_source',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "source_id" },
        ]
      },
      {
        name: "token",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
      {
        name: "patient",
        using: "BTREE",
        fields: [
          { name: "patient_id" },
        ]
      },
    ]
  });
};
