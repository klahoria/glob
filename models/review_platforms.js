const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('review_platforms', {
    rp_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    platform_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    platform_icon_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      comment: "\t0 - InActive, 1 - Active"
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
    tableName: 'review_platforms',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rp_id" },
        ]
      },
    ]
  });
};
