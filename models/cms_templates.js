const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cms_templates', {
    cms_page_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    template_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "cms_templates_types table"
    },
    comment: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    industry: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: "1-Healthcare, 2-Non-Healthcare, 3-both(healthcare & non-healthcare)"
    },
    content_changed_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "admin_id"
    },
    content_change_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    terms_seen_reset: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lang: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "en"
    }
  }, {
    sequelize,
    tableName: 'cms_templates',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cms_page_id" },
        ]
      },
    ]
  });
};
