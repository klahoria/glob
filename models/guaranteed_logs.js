const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('guaranteed_logs', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    old_value: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    new_value: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'guaranteed_logs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
    ]
  });
};
