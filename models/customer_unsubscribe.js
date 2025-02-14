const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customer_unsubscribe', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    split_req_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    contract_patient_token: {
      type: DataTypes.STRING(225),
      allowNull: false
    },
    patient_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patient_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    sms: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ip_address: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'customer_unsubscribe',
    timestamps: true,
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
