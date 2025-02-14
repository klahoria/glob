const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contract_service_record', {
    service_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    service: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "service perticular"
    },
    price: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_deleted: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'contract_service_record',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "service_id" },
        ]
      },
    ]
  });
};
