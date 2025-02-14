const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_extended', {
    ele_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fb_url: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    instagram_url: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    linkedin_url: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    web_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    twitter_url: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    pinterest_url: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    is_fb_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_insta_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_linkedin_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_web_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_twitter_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_pinterest_verified: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    added_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'doctor_extended',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ele_id" },
        ]
      },
    ]
  });
};
