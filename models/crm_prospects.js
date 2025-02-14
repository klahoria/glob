const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_prospects', {
    crm_prospect_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    crm_prospect_first_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    crm_prospect_last_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    crm_prospect_email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    crm_prospect_mobile: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    crm_prospect_gender: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "2=f,1=m,3=other"
    },
    prospect_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_made: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    email_sent: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    follow_up_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    best_contact_time: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    contact_type: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_deleted: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    added_on: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'crm_prospects',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "crm_prospect_id" },
        ]
      },
    ]
  });
};
