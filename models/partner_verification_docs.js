const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_verification_docs', {
    pvd_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    partner_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    file_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    added_on: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'partner_verification_docs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pvd_id" },
        ]
      },
    ]
  });
};
