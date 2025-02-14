const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patient_address', {
    address_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    patient_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    patient_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: true,
      defaultValue: 0
    },
    is_default: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'patient_address',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  });
};
