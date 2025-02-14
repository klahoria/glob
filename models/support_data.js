const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('support_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    have_us_call_you_back: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    write_to_us: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    chat_with_us: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    show_email: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    show_mobile: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    show_call_req_date: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    show_call_req_time: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    support_email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "ashish.sharma@bridgingtech.com"
    },
    support_mobile: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "8333363348"
    }
  }, {
    sequelize,
    tableName: 'support_data',
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
