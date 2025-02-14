const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscription_contract_notes', {
    notes_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    subsscription_contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payment_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    action_by: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      comment: "1- admin 2-doctor 3-patient 4-enterprise 5-cron 6-payment panel"
    },
    added_on: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'subscription_contract_notes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "notes_id" },
        ]
      },
    ]
  });
};
