const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preapproval_leads', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    application_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "application_id"
    },
    approved_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    customer_first_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    customer_last_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    customer_gender: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    customer_email: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    customer_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    service: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    time_to_contact: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: "time in utc"
    },
    customer_address: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    customer_city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    customer_city_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dl_doc: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    is_dl_doc_deleted: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    dl_number: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ssn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    customer_state: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    customer_zip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    annual_income: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    employer_address: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    employer_city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    employer_city_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    employer_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    employer_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    employer_state: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    employer_zip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    employement_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "\/\/ 1. employeed \/\/  2. no employement \/\/  3. self employement"
    },
    office_address: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    office_city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    office_city_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    office_state: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    office_zip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    profession: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    payback_methods: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    receipt_link: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    seen_by_business: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_pot: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0=leads,1=pot_leads"
    },
    product_code: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    auth_token: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    language_preferred: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    service_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    downpayment: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'preapproval_leads',
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
        name: "application_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
    ]
  });
};
