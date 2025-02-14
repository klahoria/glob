const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trainer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    working_start_time: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "0"
    },
    working_end_time: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "0"
    },
    on_leave: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1- leave, 2- Available"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1-add, 2-update"
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    timezone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "-700"
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainers',
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
      {
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
