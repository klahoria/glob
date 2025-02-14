const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('split_errors', {
    err_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    split_req_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    error_type: {
      type: DataTypes.ENUM('split_opened','choose_plan','split_contract_created'),
      allowNull: true
    },
    error_message: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'split_errors',
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
