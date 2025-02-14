const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stripe_errors', {
    error_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    decline_code: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    next_steps: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    can_charge: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    change_card: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    billing_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'stripe_errors',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "error_id" },
        ]
      },
    ]
  });
};
