const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cities_extended2', {
    city_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    zip: {
      type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
      allowNull: false,
      defaultValue: 00000
    },
    zip_canada: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    lon: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cities_extended2',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "state_id",
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
    ]
  });
};
