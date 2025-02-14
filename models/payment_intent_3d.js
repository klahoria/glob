const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_intent_3d', {
    pi_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    intent_id: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    intent_secret_id: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    charge_id: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'payment_intent_3d',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pi_id" },
        ]
      },
    ]
  });
};
