const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preapproval_resend_link', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    application_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    request_panel_link: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    website_url: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reminder_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0 failed, 1 email sent,2 text sent ,3 email text sent"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'preapproval_resend_link',
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
