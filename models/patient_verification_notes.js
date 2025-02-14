const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_verification_notes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    admin_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    type: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'patient_verification_notes',
    timestamps: false,
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
