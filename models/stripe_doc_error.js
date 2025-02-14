const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stripe_doc_error', {
    sde_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    details_code: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    display_message: {
      type: DataTypes.STRING(300),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'stripe_doc_error',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sde_id" },
        ]
      },
      {
        name: "sde_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sde_id" },
        ]
      },
    ]
  });
};
