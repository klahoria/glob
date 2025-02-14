const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('global_email_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    template_table: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    template_name: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-not attempted, 1-sent, 2-error"
    },
    error: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'global_email_logs',
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
