const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('denefits_testimonial_reviews', {
    dtr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reviewer_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reviewer_testimonial_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    testimonial_thumbnail_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    review_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    star_rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    review_published_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "0 - InActive, 1 - Active"
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
    tableName: 'denefits_testimonial_reviews',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dtr_id" },
        ]
      },
    ]
  });
};
