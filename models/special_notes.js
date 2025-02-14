const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('special_notes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reference_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "based on 'type'"
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1 - doctor, 2- patient, 3 - partner, 4-contract, 5 - payment_process"
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'special_notes',
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
