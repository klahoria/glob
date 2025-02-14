const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faq', {
    faq_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    priority: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'faq',
    timestamps: false
  });
};
