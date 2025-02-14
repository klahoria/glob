const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_review', {
    message_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    message: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    show_doctor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    show_partner: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    show_patient: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    text: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users_review',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "message_id" },
        ]
      },
    ]
  });
};
