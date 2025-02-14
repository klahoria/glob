const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('feature_list', {
    f_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    feature_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    feature_enum: {
      type: DataTypes.ENUM('API','EZ','WEBINTEGRATION','CHAT','EMAIL','TEXT','REQUESTCALLBACK','TIMERESPONSE1','TIMERESPONSE2','TIMERESPONSE3','TIMERESPONSE4','TRAINING','NFF','PP','AR','PROPOSAL','GP','CR','MOBILEAPPBUSINESS','MOBILEAPPCUSTOMER','FRAUDSUPPORT','DISPUTESUPPORT','PREAPPROVALLEADS'),
      allowNull: false
    },
    isActive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    feature_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'feature_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "f_id" },
        ]
      },
    ]
  });
};
