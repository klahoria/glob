const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promotional_offers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 => Emrollment Fee, 2 => Transaction Below or above threshold, 3 => Business Panel Banner"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    enum: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "ENROLLMENT \/ TRANSACTION_BELOW_THRESHOLD \/ TRANSACTION_ABOVE_THRESHOLD"
    },
    default_value: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 3
    },
    promotional_value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    strike_value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    new_business: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 => Off, 1 => ON"
    },
    existing_business: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 => Off, 1 => ON"
    },
    current_default_value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    existing_business_default_value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    banner_logo: {
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
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0 => Off, 1 => ON"
    }
  }, {
    sequelize,
    tableName: 'promotional_offers',
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
