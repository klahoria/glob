const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('csr_requests_notes', {
    note_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    req_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    priority: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "1.Low 2.Medium 3.High"
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    reassigned_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    change_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_approved: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_cron: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    followup_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    contact_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0: Default, 1: Incoming, 2: Outgoing, 3: Email, 4: Text, 5: Chat, 6: Verification Cal, 7:Potential Business, 8: Validation"
    },
    contact_result: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0: Default, 1: Voicemail, 2: No Answer, 3: Voicemail Full, 4: Answered"
    },
    communication_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0: Default, 1: Call, 2: Voice"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'csr_requests_notes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "note_id" },
        ]
      },
      {
        name: "reqIdIndex",
        using: "BTREE",
        fields: [
          { name: "req_id" },
        ]
      },
    ]
  });
};
