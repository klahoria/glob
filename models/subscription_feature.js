const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscription_feature', {
    sf_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    f_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sp_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_allowed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    is_disabled: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    number_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    number_percent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    isActive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'subscription_feature',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sf_id" },
        ]
      },
    ]
  });
};
