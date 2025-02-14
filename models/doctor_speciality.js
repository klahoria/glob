const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_speciality', {
    doctor_speciality: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    speciality_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    speciality_tag: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ind_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1(verified) 0(not verified)"
    },
    added_by: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "1(admin) 2(Doctor)"
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "1(deleted) 0(not deleted)"
    },
    order_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 999
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_speciality',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_speciality" },
        ]
      },
    ]
  });
};
