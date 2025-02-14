const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('split_bulk_uploads', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doc_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "file_original_name"
    },
    total_records: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    doc_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    req_id: {
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
    tableName: 'split_bulk_uploads',
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
