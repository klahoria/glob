const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_verification_docs', {
    dvd_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: "doctor_id"
    },
    path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doc_type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0 fr pass,1 fr DL"
    },
    front_file_id: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    back_file_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    added_on: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_verification_docs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dvd_id" },
        ]
      },
      {
        name: "doctor_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
    ]
  });
};
