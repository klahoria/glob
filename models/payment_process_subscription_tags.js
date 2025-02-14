const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payment_process_subscription_tags', {
    id: {
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
    pp_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: One Time, 1: Recurring"
    },
    payment_schedule: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    service_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    discount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_default: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    doctor_transaction_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    patient_transaction_fee: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    service_record: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_fav: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    is_deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    show_transaction_fee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'payment_process_subscription_tags',
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
