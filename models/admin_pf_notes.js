const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_pf_notes', {
    notes_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    pf_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    ppr_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    enterprise_id: {
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
    amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_mode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    missing_count: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    next_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    old_payment_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    transaction_initiated_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    bankruptcy_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    payment_date: {
      type: DataTypes.DATE,
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
    },
    meta_data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin_pf_notes',
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
      {
        name: "pf_id",
        using: "BTREE",
        fields: [
          { name: "pf_id" },
        ]
      },
    ]
  });
};
