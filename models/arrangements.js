const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('arrangements', {
    arrangement_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "contract_id"
    },
    source_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arrangement_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    arrangement_payment_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1-Recurring, 2-Partial payment"
    },
    partial_amount: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      defaultValue: 0.00
    },
    number_of_recurring: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    number_of_recurring_successful: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    arrangement_slot_type: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: false,
      defaultValue: "1",
      comment: "1-morning, 2-afternoon, 3-evening"
    },
    admin_id: {
      type: DataTypes.MEDIUMINT,
      allowNull: false
    },
    arrangement_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_successful: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "Null-Pending, 0-Failed, 1-Successful"
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'arrangements',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "arrangement_id" },
        ]
      },
      {
        name: "contract_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contract_id" },
        ]
      },
    ]
  });
};
