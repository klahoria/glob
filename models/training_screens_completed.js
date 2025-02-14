const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_screens_completed', {
    psc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    partner_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    training_screen_id: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false
    },
    completed_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'training_screens_completed',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "psc_id" },
        ]
      },
    ]
  });
};
