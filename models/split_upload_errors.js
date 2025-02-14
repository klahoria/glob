const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('split_upload_errors', {
    err_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    error: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "request logs id"
    },
    is_deleted: {
      type: DataTypes.TINYINT,
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
    tableName: 'split_upload_errors',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "err_id" },
        ]
      },
    ]
  });
};
