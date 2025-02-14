const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authorization_table', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    source_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "0 default becoz it is not available at time of charging"
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    source_card: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    refund_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    amount: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    last_charged: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'authorization_table',
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
