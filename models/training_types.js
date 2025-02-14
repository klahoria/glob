const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_types', {
    type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "In Minutes"
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    only_visible_to_admin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'training_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
};
