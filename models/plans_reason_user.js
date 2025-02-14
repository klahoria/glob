const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plans_reason_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reason_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "100=others"
    },
    doctor_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reason_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'plans_reason_user',
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
