const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_financial_settings', {
    dfs_id: {
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
    min_treatment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    max_treatment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    min_downpayment_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    max_downpayment_percent: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      defaultValue: 0.00
    },
    min_months: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    max_months: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    min_interest_rate: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    max_interest_rate: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    apply_to_me: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "settings applicable to doctor as well"
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1-active 0-inactive"
    },
    is_deleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-deleted 0-not deleted"
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'doctor_financial_settings',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dfs_id" },
        ]
      },
    ]
  });
};
