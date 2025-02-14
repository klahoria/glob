const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('institute_notifications', {
    in_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    institute_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    patient_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    notification_type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1
    },
    subject: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    action_taken: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    read_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sent_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'institute_notifications',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "in_id" },
        ]
      },
    ]
  });
};
