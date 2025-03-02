const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stripe_identity_verification', {
    siv_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stripe_account_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    verification_session_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    session_created_at: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    verification_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    internal_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    verification_report_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doc_front_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doc_front_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doc_back_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    doc_back_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    err_message: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    stripe_response_obj: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stripe_identity_verification',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "siv_id" },
        ]
      },
    ]
  });
};
