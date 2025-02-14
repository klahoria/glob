const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inquiry_email_sent_records', {
    inquiry_email_sent_record_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    lead_doctor_email: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    inquiry_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    recipient_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sender_admin_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'inquiry_email_sent_records',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inquiry_email_sent_record_id" },
        ]
      },
    ]
  });
};
