const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bot_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    conversation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    time_interval: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "In hours"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "PDT TIMESTAMP"
    }
  }, {
    sequelize,
    tableName: 'bot_logs',
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
