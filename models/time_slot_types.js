const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('time_slot_types', {
    time_slot_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    time_slot_type_text: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    time_slot_type_code: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    time_slot_type_color: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    time_slot_type_date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    time_slot_type_date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'time_slot_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "time_slot_type_id" },
        ]
      },
    ]
  });
};
