const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssn_verification', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.STRING(365),
      allowNull: false
    },
    ssn: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: " 1-experian 2-transunion 3-equifax"
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'ssn_verification',
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
