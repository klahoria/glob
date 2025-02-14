const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departments', {
    department_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "location id of interprise"
    },
    department_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_blocked: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-blocked \/0-unblocked"
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1- deleted 0- not deleted"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'departments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "department_id" },
        ]
      },
    ]
  });
};
