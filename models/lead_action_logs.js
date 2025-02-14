const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lead_action_logs', {
    action_log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lead_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    action_type: {
      type: DataTypes.ENUM('csv upload','create','update','assigned','comment','called','status update','deleted','Followup'),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'lead_action_logs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "action_log_id" },
        ]
      },
    ]
  });
};
