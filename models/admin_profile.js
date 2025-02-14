const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_profile', {
    admin_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    admin_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    super_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    admin_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    admin_email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    admin_image: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    admin_password: {
      type: DataTypes.STRING(56),
      allowNull: true
    },
    reset_password: {
      type: DataTypes.STRING(56),
      allowNull: true
    },
    is_blocked: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    reset_login: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_registered: {
      type: DataTypes.DATE,
      allowNull: false
    },
    admin_role: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "role id for front end menu"
    },
    role_json: {
      type: DataTypes.STRING(5000),
      allowNull: false,
      defaultValue: "{}",
      comment: "Access JSON"
    },
    boss: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "for paul sir or any superadmin account which is not visible in list"
    },
    check_idle_session: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'admin_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "admin_id" },
        ]
      },
    ]
  });
};
