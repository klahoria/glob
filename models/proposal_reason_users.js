const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proposal_reason_users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reason_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "100=others"
    },
    cancel_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "0=remind_me_later, 1=not_interested"
    },
    patient_token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reason_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "text_for_other_reason"
    },
    patient_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'proposal_reason_users',
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
