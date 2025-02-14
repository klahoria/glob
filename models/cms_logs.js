const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cms_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cms_page_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    template_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    old_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    new_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    content_modified_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "admin_id"
    },
    live_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    live_end_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    terms_seen_reset: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cms_logs',
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
