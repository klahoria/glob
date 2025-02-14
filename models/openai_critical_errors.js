const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('openai_critical_errors', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    panel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Refer to denefit_panels table"
    },
    error_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    error_in: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'openai_critical_errors',
    timestamps: true,
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
