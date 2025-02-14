const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('denefits_visitor_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    visitor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    visitor_fingerprint: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    canvas_fingerprint: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    visitor_email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    visitor_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_news_letter_subscriber: {
      type: DataTypes.ENUM('1','2'),
      allowNull: false,
      defaultValue: "2",
      comment: "1 => True, 2 => False\t"
    },
    industry_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    page_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    campaign_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_active: {
      type: DataTypes.ENUM('1','2'),
      allowNull: false,
      defaultValue: "1"
    },
    visitor_from: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 => Campaign, 1 => Reqeust a callback, 2 => Schedule a demo"
    },
    meta_info: {
      type: DataTypes.JSON,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'denefits_visitor_history',
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
