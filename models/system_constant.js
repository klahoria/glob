const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('system_constant', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    setting_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    setting_value: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    arv2_setting_value: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "admin_id for arv2 ticket generation when business uploads raw data file"
    },
    isActive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'system_constant',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
