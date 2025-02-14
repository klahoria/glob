const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sms_content', {
    content_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    business_email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    business_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    customer_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    customer_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    service_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    downpayment_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    number_of_payments: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    interest_rate: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    financed_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    recurring_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    total_charges_today: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'sms_content',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "content_id" },
        ]
      },
    ]
  });
};
