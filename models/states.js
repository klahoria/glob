const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('states', {
    state_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    state_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state_code: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    country_id: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'states',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
    ]
  });
};
