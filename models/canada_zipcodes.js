const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('canada_zipcodes', {
    zip_canada: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    lat: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    long: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'canada_zipcodes',
    timestamps: false
  });
};
