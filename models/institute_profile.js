const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('institute_profile', {
    institute_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    institute_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    institute_email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    institute_mobile: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    referral_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    institute_image: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    institute_password: {
      type: DataTypes.STRING(56),
      allowNull: false
    },
    can_finance: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_guaranteed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_dummy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    customer_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    subscribed_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    stripe_account_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    stripe_publishable: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    stripe_secret: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tin: {
      type: DataTypes.STRING(30),
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'institute_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "institute_id" },
        ]
      },
    ]
  });
};
