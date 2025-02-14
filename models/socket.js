const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('socket', {
    socket_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    access_token: {
      type: DataTypes.STRING(102),
      allowNull: true
    },
    login_type: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "admin"
    },
    is_dummy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    user_timezone: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: "-700",
      comment: "-700 means 7 hours behind UTC, 530 means 5 hours 30 minutes ahead of UTC"
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'socket',
    timestamps: false
  });
};
