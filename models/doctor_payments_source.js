const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_payments_source', {
    source_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    payment_source_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    brand: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    last4: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    country_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fingerprint: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    funding: {
      type: DataTypes.STRING(32),
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
      comment: "0- stripe 1-plaid"
    },
    verified_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_hidden: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    last_error: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    is_auth_card: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    last_refreshed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'doctor_payments_source',
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
    ]
  });
};
