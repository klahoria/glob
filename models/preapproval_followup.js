const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('preapproval_followup', {
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
    lead_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1 for cold, 2 for warm , 3 for hot"
    },
    followup_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    followup_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    follow_up_date_time_utc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    notification_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1 only on panel, 2 email and panel , 3 phone and panel , 4 panel phone email"
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notification_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "\t1 only on panel, 2 email and panel , 3 phone and panel , 4 panel phone email\t"
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'preapproval_followup',
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
