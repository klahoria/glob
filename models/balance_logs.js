const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('balance_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    balance: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_low_balance: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'balance_logs',
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
