const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lead_status', {
    status_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    color_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lead_status',
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
