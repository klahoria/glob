const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notification_types', {
    nt_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    panel: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1-admin 2-doctor 3-patient 4-partner"
    }
  }, {
    sequelize,
    tableName: 'notification_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nt_id" },
        ]
      },
    ]
  });
};
