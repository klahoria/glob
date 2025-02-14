const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    error: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    message_id: {
      type: DataTypes.STRING(350),
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    pr_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    split_req_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_error: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'email_history',
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
      {
        name: "email_history_idx_split_id",
        using: "BTREE",
        fields: [
          { name: "split_req_id" },
        ]
      },
    ]
  });
};
