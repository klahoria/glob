const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_signup_email_read_count', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    doctor_email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email_template: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email_sent: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    email_read_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_email_read: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_signup_email_read_count',
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
