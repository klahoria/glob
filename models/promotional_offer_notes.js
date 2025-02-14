const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('promotional_offer_notes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    promotional_offer_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "0 => Inactive, 1 => Active\t"
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
    }
  }, {
    sequelize,
    tableName: 'promotional_offer_notes',
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
