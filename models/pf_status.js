const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pf_status', {
    status_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pf_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
    ]
  });
};
