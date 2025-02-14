const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agent_profile', {
    agent_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    entity_id: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    default_doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    title: {
      type: DataTypes.ENUM('','Dr.','Mr.','Ms.','Mrs.','Miss.'),
      allowNull: true
    },
    agent_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    agent_email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    agent_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    agent_image: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    agent_password: {
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
    date_registered: {
      type: DataTypes.DATE,
      allowNull: false
    },
    show_finance_helper: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    financing_view: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "1-new 0-old"
    },
    added_by: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Doctor 1-Enterprise"
    },
    blocked_by: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1- SuperAdmin 2- Admin 3-location Manager 4- User"
    },
    blocked_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    language_preferred: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    show_website_integ: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'agent_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "agent_id" },
        ]
      },
    ]
  });
};
