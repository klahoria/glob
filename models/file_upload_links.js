const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('file_upload_links', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    file_id: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    s3_url: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file_type: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'file_upload_links',
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
        name: "file_id",
        using: "BTREE",
        fields: [
          { name: "file_id" },
        ]
      },
    ]
  });
};
