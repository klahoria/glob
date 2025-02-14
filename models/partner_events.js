const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('partner_events', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    partner_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    event_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    event_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    event_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    actual_event_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time_zone: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "-700"
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    event_link: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    meeting_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    meeting_passcode: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    event_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 --> Webinar, 2 --> Training link"
    },
    child_event_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "1 --> busines, 2 --> Partner"
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'partner_events',
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
