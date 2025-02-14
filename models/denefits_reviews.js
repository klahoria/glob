const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('denefits_reviews', {
    dr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rp_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reviewer_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reviewer_pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM('M','F'),
      allowNull: false
    },
    review_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    review_published_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    review_message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    denefits_response: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    review_nature: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    star_rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review_category: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_visible_in_website: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "0 - No, 1 - Yes"
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
    tableName: 'denefits_reviews',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dr_id" },
        ]
      },
    ]
  });
};
