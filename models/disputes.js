const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('disputes', {
    disp_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    dispute_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: "dispute_id"
    },
    dopa_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ppr_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pp_subscription_record_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    move_to_unpaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    doctor_transfer_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    transfer_reversal_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    cad_reversal_pending: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Canadian business dispute flow, 1 will create the transfer reversal if the dispute is lost, 2 is transfer reversal done"
    },
    cad_reversal_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "pending amount of transfer reversal for canadian business"
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    amount_charged: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 0.00
    },
    amount_deducted: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 0.00
    },
    amount_disputed: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 0.00
    },
    is_manual_amount: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    patient_charge_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    dispute_fee: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      defaultValue: 0.00
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reason: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    refunded: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    take_back_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_urgent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dispute_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'disputes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "disp_id" },
        ]
      },
      {
        name: "dispute_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dispute_id" },
        ]
      },
      {
        name: "dispute_id_2",
        using: "BTREE",
        fields: [
          { name: "dispute_id" },
        ]
      },
      {
        name: "charge_id",
        using: "BTREE",
        fields: [
          { name: "charge_id" },
        ]
      },
    ]
  });
};
