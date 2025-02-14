const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reminder_settings', {
    contract_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    r_first: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    r_second: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    r_third: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    r_fourth: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'reminder_settings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
    ]
  });
};
