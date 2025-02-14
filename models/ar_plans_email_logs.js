const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ar_plans_email_logs', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ap_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'ar_plans_email_logs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
    ]
  });
};
