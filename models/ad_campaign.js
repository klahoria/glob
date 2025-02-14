const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ad_campaign', {
    ac_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    campaign_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    campaign_web_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    campaign_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    campaign_industry: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    campaign_source: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    campaign_medium: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    campaign_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "0 => Inactive, 1 => Active"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ad_campaign',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ac_id" },
        ]
      },
    ]
  });
};
