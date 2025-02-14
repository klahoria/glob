const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('marketing_notes', {
    note_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_closed: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'marketing_notes',
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
    ]
  });
};
