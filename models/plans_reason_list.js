const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plans_reason_list', {
    reason_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    reason_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_checked: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: "0"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plans_reason_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reason_id" },
        ]
      },
    ]
  });
};
