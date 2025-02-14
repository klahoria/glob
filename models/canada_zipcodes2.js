const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('canada_zipcodes2', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    zip: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    zip_old: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    province_abbr: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    time_zone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'canada_zipcodes2',
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
