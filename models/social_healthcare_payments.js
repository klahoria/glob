const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('social_healthcare_payments', {
    shp_id: {
      // autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    contract_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    charge_id: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    actual_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    wallet_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    unutilized_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    stripe_fee: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    recurring_amount_before: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    recurring_amount_after: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    missing_payments: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    remaining_payments: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    friend_title: {
      type: DataTypes.ENUM('Dr.','Mr.','Ms.','Mrs.','Miss.'),
      allowNull: true
    },
    friend_first_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    friend_last_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    friend_mobile: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    friend_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    link_from: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-admin 2-doctor 3-patient 4-enterprise"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'social_healthcare_payments',
    timestamps: false,
    indexes: [
      {
        name: "shp_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "shp_id" },
        ]
      },
    ]
  });
};
