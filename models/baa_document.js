const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baa_document', {
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_clinic_name: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    doctor_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doctor_title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    doctor_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    doctor_signature: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    doctor_salutation: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    doctor_email: {
      type: DataTypes.STRING(254),
      allowNull: true
    },
    doctor_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    doctor_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doctor_city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doctor_state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doctor_zip: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    support_salutation: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    vendor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    support_signature: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    support_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    support_title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    support_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    automatic: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    form_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    manual_form_link: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'baa_document',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "doctor_id" },
        ]
      },
    ]
  });
};
