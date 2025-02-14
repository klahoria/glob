const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_pf_action_type', {
    cd_payment_type: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    action_value: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    comments: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin_pf_action_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cd_payment_type" },
        ]
      },
    ]
  });
};
