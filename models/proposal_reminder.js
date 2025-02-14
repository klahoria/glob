const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proposal_reminder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    split_req_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('Text','Email','Email & Text','Manual Token'),
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    reminder_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    source_from: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null indicate system"
    },
    is_failed: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    date_sent: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    reminder_template_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    reminder_template_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    discount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    reminder_count: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    is_manual: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "1-->by admin,2-->by business"
    },
    is_email_failed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    is_sms_failed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    reminder_token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_email_open: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    last_email_read: {
      type: DataTypes.DATE,
      allowNull: true
    },
    link_opened_by_email: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    link_opened_by_sms: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    language_preferred: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "en"
    }
  }, {
    sequelize,
    tableName: 'proposal_reminder',
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
        name: "proposal_reminder_idx_split_id_id_date_sent",
        using: "BTREE",
        fields: [
          { name: "split_req_id" },
          { name: "id" },
          { name: "date_sent" },
        ]
      },
    ]
  });
};
