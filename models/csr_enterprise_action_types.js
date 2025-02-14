const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('csr_enterprise_action_types', {
    action_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    action_value: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'csr_enterprise_action_types',
    timestamps: false
  });
};
