const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api_response_time', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "1: Enterprise, 2: Doctor, 3: Customer, 4: Request, 5: Admin, 6: Partner"
    },
    is_dummy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0: No, 1: Yes"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    api_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    time_in_millisecond: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    time_in_second: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0
    },
    request_body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cpu_usage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "in percent"
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
    tableName: 'api_response_time',
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
