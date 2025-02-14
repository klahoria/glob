const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_weekly_preferences', {
    weekly_preference_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    weekly_preference_start_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    weekly_preference_date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    weekly_preference_date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    doctor_partner_type: {
      type: DataTypes.ENUM('doctor','partner'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_weekly_preferences',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "weekly_preference_id" },
        ]
      },
    ]
  });
};
