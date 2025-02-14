const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lead_sources', {
    lead_source_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    source_name: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1-active, 2-inactive"
    }
  }, {
    sequelize,
    tableName: 'lead_sources',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lead_source_id" },
        ]
      },
    ]
  });
};
