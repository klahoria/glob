const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rating', {
    rating_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    app_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1: Android, 2: iOS,3: web it is device_type"
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    csr_req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    panel: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1- business, 2-customer"
    },
    rating_using_api: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    feedback_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "0: dislike 1 :like 2: remind me later"
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    issue_with: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "1: service provider 2:Denefits Financing 3:both"
    },
    app_version: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'rating',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rating_id" },
        ]
      },
    ]
  });
};
