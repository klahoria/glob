const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('financer_profile', {
    financer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    default_doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    title: {
      type: DataTypes.ENUM('','Dr.','Mr.','Ms.','Mrs.','Miss.'),
      allowNull: false
    },
    financer_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    financer_email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    financer_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    financer_image: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    financer_password: {
      type: DataTypes.STRING(56),
      allowNull: false
    },
    app_used: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "-1"
    },
    reset_password: {
      type: DataTypes.STRING(56),
      allowNull: true
    },
    reset_login: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    added_by: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Doctor 1-Enterprise"
    },
    date_registered: {
      type: DataTypes.DATE,
      allowNull: false
    },
    show_finance_helper: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    blocked_by: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 for admin, 2 for location, 3 for enterprise"
    }
  }, {
    sequelize,
    tableName: 'financer_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "financer_id" },
        ]
      },
    ]
  });
};
