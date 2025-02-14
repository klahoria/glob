const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enterprise_admin_profile', {
    enterprise_admin_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    enterprise_admin_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    enterprise_admin_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    enterprise_mobile: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    role_id: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    reset_password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    enterprise_password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'enterprise_admin_profile',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "enterprise_admin_id" },
        ]
      },
    ]
  });
};
