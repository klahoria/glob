const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_requests', {
    req_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    request_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1. Call Back request 2. Refund request 3. Cancellation Request 4. Dispute Update 5. Edit Recurring Date 6. $25 late fees waive off 7. Contract Changes 8. Others"
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    assignee_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    assignee_type: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-Admin 2-Subadmin"
    },
    request_from: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "1-Patient,2-Doctor,3-Partner"
    },
    contract_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    request_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1- New Request 2- In progress 3- Sent for review 4- Completed with notes"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin_requests',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "req_id" },
        ]
      },
    ]
  });
};
