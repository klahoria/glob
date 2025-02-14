const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_location_manager', {
    dl_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    location_manager_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    doctor_id: {
      type: DataTypes.STRING(100),
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
    deleted_by: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1- SuperAdmin 2- Admin 3-location Manager 4- User"
    },
    blocked_by: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1- SuperAdmin 2- Admin 3-location Manager 4- User"
    },
    blocked_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    deleted_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_location_manager',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dl_id" },
        ]
      },
    ]
  });
};
