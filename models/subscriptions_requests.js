const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscriptions_requests', {
    sub_req_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subscription_ids: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patient_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patient_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    patient_mobile: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payment_token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    subscription_contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_sent: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'subscriptions_requests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sub_req_id" },
        ]
      },
    ]
  });
};
