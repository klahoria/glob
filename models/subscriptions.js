const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscriptions', {
    subscription_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    plan_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    plan_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    plan_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    service_array: {
      type: DataTypes.TEXT,
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
    tableName: 'subscriptions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subscription_id" },
        ]
      },
    ]
  });
};
