const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mass_email_report', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    profile_of: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    template_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    only_variables: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    send_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'mass_email_report',
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
      {
        name: "doctor_id",
        using: "BTREE",
        fields: [
          { name: "profile_of" },
        ]
      },
    ]
  });
};
