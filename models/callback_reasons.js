const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('callback_reasons', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "1- doctor, 2-patient, 3- partner"
    },
    priority: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    order_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_show: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'callback_reasons',
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
