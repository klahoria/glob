const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('doctor_missing_payments', {
    missing_payment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    patient_charge_dopa_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "dopa_id for patient charge"
    },
    doctor_transfer_dopa_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "dopa_id for doctor transfer"
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pay_to_doctor: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    recurring_amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    force_claim_open: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1 claim is open for doctor 0 treat normal"
    },
    claim_status_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 - not claimed, 1 - pending, 2 - Approved, 3 - rejected, 4 - On Hold, 5 - Paid, 6 - Need More Documents, 7 - Documents uploaded , 8 - Unpaid,9-Remove From Unpaid, 10-Expired 11-Special Move to Unpaid(for missing notes), 12-Unpaid Pending"
    },
    paid_by_denefits: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    paid_to_denefits: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    first_payment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "one_paid_to_denefits??"
    },
    is_orp: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Overdue Reserved payment"
    },
    is_orp_instant_claim: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_special_move_to_unpaid: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Make it 1 when the payment is special move to unpaid"
    },
    expired_by_system: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0-Active,1-edit recurring,2-payment received from patient, 3-Cancel, 4-Charge full, 5-social healthcare, 6-partial payment, 7-Manual"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    decline_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    can_claim_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    claimed_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_doc_required: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "last updation for documentation required"
    },
    extra_days_to_submit_docs: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    reported_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    reported_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Cool Credit 0-pending 1-positive 2-negative"
    }
  }, {
    sequelize,
    tableName: 'doctor_missing_payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "missing_payment_id" },
        ]
      },
      {
        name: "contract_id_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contract_id" },
          { name: "payment_date" },
        ]
      },
      {
        name: "contract_id",
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
      {
        name: "patient_charge_dopa_id",
        using: "BTREE",
        fields: [
          { name: "patient_charge_dopa_id" },
        ]
      },
    ]
  });
};
