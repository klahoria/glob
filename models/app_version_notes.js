const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_version_notes', {
    avn_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: " app version id - app_version table"
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'app_version_notes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "avn_id" },
        ]
      },
    ]
  });
};
