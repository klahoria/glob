const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_schedule', {
    as_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    schedule_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    local_start_time: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    local_end_time: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    utc_start_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    utc_end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tz_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    training_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 for None 1 for doctor 2 for partner 3 for both"
    },
    assigned_by: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin_schedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "as_id" },
        ]
      },
    ]
  });
};
