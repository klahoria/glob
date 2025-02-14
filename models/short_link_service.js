const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('short_link_service', {
    sls_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    original_link: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    short_url: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "short_url"
    },
    sms_sent_status_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'short_link_service',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sls_id" },
        ]
      },
      {
        name: "short_url",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "short_url" },
        ]
      },
    ]
  });
};
