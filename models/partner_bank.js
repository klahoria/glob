const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_bank', {
    bank_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stripe_bank_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    routing_number: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    account_number: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    account_holder_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_holder_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'partner_bank',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bank_id" },
        ]
      },
    ]
  });
};
