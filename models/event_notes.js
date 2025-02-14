const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_notes', {
    note_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'event_notes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "note_id" },
        ]
      },
      {
        name: "note_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "note_id" },
        ]
      },
    ]
  });
};
