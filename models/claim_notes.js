const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('claim_notes', {
    note_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    claim_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    exception: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-no exception,1-exception,2-resolved"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    },
    docs_urls: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'claim_notes',
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
