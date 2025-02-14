const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_app_links', {
    customer_web: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    business_web: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    partner_web: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    customer_android: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    business_android: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    partner_android: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    customer_ios: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    business_ios: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    partner_ios: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'web_app_links',
    timestamps: false
  });
};
