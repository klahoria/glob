const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_notes', {
    pn_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subadmin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    note: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'patient_notes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pn_id" },
        ]
      },
    ]
  });
};
