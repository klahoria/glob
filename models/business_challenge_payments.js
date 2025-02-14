const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_challenge_payments', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    business_reward_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1 for $15 challenge, 2 for new business register $100 challenge"
    },
    selected_payout_option: {
      type: DataTypes.ENUM('1','2'),
      allowNull: false,
      comment: "1, for transfer payment, 2 amazon gift card"
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1 for pending transfer, 2 for success transfer, 3  sent  amazon gift card"
    },
    transfer_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    payment_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    challenge_reward_month: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    reward_for_month: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "1 for 1st month, 2 for 2nd month, 3 for 3rd month from registration"
    },
    is_urgent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    }
  }, {
    sequelize,
    tableName: 'business_challenge_payments',
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
