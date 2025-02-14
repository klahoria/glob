const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resend_contract_changes_requests', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ccr_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "id of contract_changes_requests"
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0-sent by doctor, 0> sent by admin_id"
    },
    resend_email: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    resend_mobile: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    resend_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'resend_contract_changes_requests',
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
