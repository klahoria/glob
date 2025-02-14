const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('financer_departments', {
    fd_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    financer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-delete 0-not deleted"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_updated: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: " 0-default, 1-updated"
    }
  }, {
    sequelize,
    tableName: 'financer_departments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fd_id" },
        ]
      },
    ]
  });
};
