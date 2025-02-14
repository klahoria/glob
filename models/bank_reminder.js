const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bank_reminder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reminder_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reminder_template_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reminder_count: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_cron: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1- by cron 0 -manually"
    },
    date_sent: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'bank_reminder',
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
