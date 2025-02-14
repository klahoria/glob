const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('denefits_training_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    denefits_training_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    training_url: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'denefits_training_details',
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
