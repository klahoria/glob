const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_triggers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_type: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    is_error: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    split_req_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    req_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    meta_data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'event_triggers',
    timestamps: true,
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
