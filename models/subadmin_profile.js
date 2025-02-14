const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subadmin_profile', {
    subadmin_id: {
      autoIncrement: true,
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    admin_id: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    subadmin_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    subadmin_email: {
      type: DataTypes.STRING(254),
      allowNull: false
    },
    subadmin_image: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    subadmin_password: {
      type: DataTypes.STRING(56),
      allowNull: false
    },
    reset_password: {
      type: DataTypes.STRING(56),
      allowNull: true
    },
    privileges: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "1- All(Super admin) 2- Payments(Only Super admin) 3- Charges(Only Super admin) 4- Transfers(Only Super admin) 5- Payouts(Only Super admin) 6- Dashboard: Dashboard tab as well e.g Financed Amount, Doctors, Partners etc(Tab Names) 7- Manage Doctors 8- Search Doctors 9- Partners 10- Patients 11- Financed Contracts 12- Overdue Contracts 13- Disputed Contracts(Only Super admin) 14- Legal Contracts 15- Cancelled Contracts 16- Marketing(Explained below) 17- Training(Explained below) 18- Request(Explained below) 19- Rewards 20- Late Fees 21- Recurring Fees 22- Reports(Only Super admin) 23- Unpaid Payments(Only Super admin) 24- Errors 25- Calculator 26- Activity Tracker"
    },
    menu_json: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_blocked: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    reset_login: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_registered: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'subadmin_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subadmin_id" },
        ]
      },
    ]
  });
};
