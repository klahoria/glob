const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscription_plan', {
    sp_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sub_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    sub_enum: {
      type: DataTypes.ENUM('FREE','PLATINUM','GOLD','SILVER'),
      allowNull: false
    },
    sub_cost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    plan_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    validity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "in days"
    },
    setup_cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isActive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subscription_plan',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sp_id" },
        ]
      },
    ]
  });
};
