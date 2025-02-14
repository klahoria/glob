const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscription_payment_intents', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sp_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    charge_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_intent_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    payment_client_secret: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    payment_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    upi_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    app_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    request_body: {
      type: DataTypes.JSON,
      allowNull: false
    },
    webhook_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    tableName: 'subscription_payment_intents',
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
