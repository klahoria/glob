const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_statuses', {
    training_status_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    training_status_name: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    training_status_code: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    training_status_color_code: {
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'training_statuses',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "training_status_id" },
        ]
      },
    ]
  });
};
