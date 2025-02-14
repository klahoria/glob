const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timezone', {
    tz_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    offset: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    val: {
      type: DataTypes.STRING(6),
      allowNull: false,
      comment: "-700 means 7 hours behind UTC, 530 means 5 hours 30 minutes ahead of UTC"
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    zone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alternate_daylight_code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    time_from: {
      type: DataTypes.DATE,
      allowNull: false
    },
    time_to: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'timezone',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tz_id" },
        ]
      },
    ]
  });
};
